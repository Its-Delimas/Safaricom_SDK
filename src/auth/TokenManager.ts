export class TokenManager {
  private cachedToken: string | null = null;
  private expiresAt: number = 0;

  constructor(
    private readonly baseUrl: string,
    private readonly consumerKey: string,
    private readonly consumerSecret: string
  ) {}

  async getToken(): Promise<string> {

    if (this.cachedToken && Date.now() < this.expiresAt) {
      return this.cachedToken;
    }

    const credentials = Buffer.from(
      `${this.consumerKey}:${this.consumerSecret}`
     ).toString("base64");

    const response = await fetch(
      `${this.baseUrl}/oauth/v1/generate?grant_type=client_credentials`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );

    const data = await response.json();

    const expiresInMs = Number(data.expires_in) * 1000;
    const safetyBufferMs = 60 * 1000;

    this.cachedToken = data.access_token;
    this.expiresAt = Date.now() + expiresInMs - safetyBufferMs;

    return this.cachedToken!;
  }
}