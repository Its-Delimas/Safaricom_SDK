"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpesaClient = void 0;
const TokenManager_1 = require("../auth/TokenManager");
class MpesaClient {
    constructor(config) {
        this.config = config;
        this.baseUrl = config.environment === "production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";
    }
    async testauth() {
        const tokenManager = new TokenManager_1.TokenManager(this.baseUrl, this.config.consumerKey, this.config.consumerSecret);
        return tokenManager.getToken();
    }
}
exports.MpesaClient = MpesaClient;
