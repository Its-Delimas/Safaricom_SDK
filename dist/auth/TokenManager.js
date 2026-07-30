"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenManager = void 0;
class TokenManager {
    constructor(baseUrl, consumerKey, consumerSecret) {
        this.baseUrl = baseUrl;
        this.consumerKey = consumerKey;
        this.consumerSecret = consumerSecret;
    }
    async getToken() {
        const credentials = Buffer.from(`${this.consumerKey}:${this.consumerSecret}`).toString("base64");
        const response = await fetch(`${this.baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
            method: "GET",
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch token:${response.status}`);
        }
        const data = await response.json();
        return data.access_token;
    }
}
exports.TokenManager = TokenManager;
