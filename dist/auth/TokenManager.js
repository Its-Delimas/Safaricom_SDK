"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenManager = void 0;
class TokenManager {
    constructor(baseUrl, consumerKey, consumerSecret) {
        this.baseUrl = baseUrl;
        this.consumerKey = consumerKey;
        this.consumerSecret = consumerSecret;
        this.cachedToken = null;
        this.expiresAt = 0;
    }
    async getToken() {
        if (this.cachedToken && Date.now() < this.expiresAt) {
            return this.cachedToken;
        }
        const credentials = Buffer.from(`${this.consumerKey}:${this.consumerSecret}`).toString("base64");
        const response = await fetch(`${this.baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
            method: "GET",
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch token: ${response.status}`);
        }
        const data = await response.json();
        const expiresInMs = Number(data.expires_in) * 1000;
        const safetyBufferMs = 60 * 1000;
        this.cachedToken = data.access_token;
        this.expiresAt = Date.now() + expiresInMs - safetyBufferMs;
        return this.cachedToken;
    }
}
exports.TokenManager = TokenManager;
