import { MpesaConfig } from "../types/config";

export class MpesaClient {
    private readonly config:MpesaConfig;
    private readonly baseUrl:string;

    constructor(config:MpesaConfig){
        this.config = config;
        this.baseUrl = config.environment==="production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";
    }
}