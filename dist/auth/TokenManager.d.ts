export declare class TokenManager {
    private readonly baseUrl;
    private readonly consumerKey;
    private readonly consumerSecret;
    constructor(baseUrl: string, consumerKey: string, consumerSecret: string);
    getToken(): Promise<string>;
}
