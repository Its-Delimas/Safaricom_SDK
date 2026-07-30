export declare class TokenManager {
    private readonly baseUrl;
    private readonly consumerKey;
    private readonly consumerSecret;
    private cachedToken;
    private expiresAt;
    constructor(baseUrl: string, consumerKey: string, consumerSecret: string);
    getToken(): Promise<string>;
}
