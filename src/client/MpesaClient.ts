import { TokenManager } from "../auth/TokenManager";
import { MpesaConfig } from "../types/config";

export class MpesaClient {
    private readonly config: MpesaConfig;
    private readonly baseUrl: string;
    private readonly tokenManager: TokenManager;

    constructor (config:MpesaConfig){
        this.config = config;
        this.baseUrl =
            config.environment === "production" 
            ? "https://api.safaricom.co.ke"
            : "https://sandbox.safaricom.co.ke";

            this.tokenManager = new TokenManager (
                this.baseUrl,config.consumerKey,config.consumerSecret
            );
    }

    async testAuth():Promise<string>{
        return this.tokenManager.getToken();
    }
}