import { TokenManager } from "../auth/TokenManager";
import { MpesaConfig } from "../types/config";

export class MpesaClient {
    private readonly config:MpesaConfig;
    private readonly baseUrl:string;

    constructor(config:MpesaConfig){
        this.config = config;
        this.baseUrl = config.environment==="production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";
    }

    async testauth(): Promise <string> {
        const tokenManager = new TokenManager(
            this.baseUrl,
            this.config.consumerKey,
            this.config.consumerSecret
        );
        return tokenManager.getToken();
    }
}