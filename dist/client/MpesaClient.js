"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpesaClient = void 0;
const TokenManager_1 = require("../auth/TokenManager");
const HttpClient_1 = require("../http/HttpClient");
const BuildStkPushPayload_1 = require("../services/stk/BuildStkPushPayload");
const timestamp_1 = require("../utils/timestamp");
const password_1 = require("../utils/password");
class MpesaClient {
    constructor(config) {
        this.config = config;
        this.baseUrl = config.environment === "production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";
        this.tokenManager = new TokenManager_1.TokenManager(this.baseUrl, config.consumerKey, config.consumerSecret);
        this.http = new HttpClient_1.HttpClient(this.baseUrl);
    }
    async stkPush(request) {
        const token = await this.tokenManager.getToken();
        const timestamp = (0, timestamp_1.generateTimestamp)();
        const password = (0, password_1.generatePassword)(this.config.shortCode, this.config.passKey, timestamp);
        const payload = (0, BuildStkPushPayload_1.buildStkPushPayloads)(request, this.config.shortCode, password, timestamp, this.config.callbackUrl);
        return this.http.post("/mpesa/stkpush/v1/processrequest", payload, token);
    }
}
exports.MpesaClient = MpesaClient;
