import { MpesaConfig } from "../types/config";
import { TokenManager } from "../auth/TokenManager";
import { HttpClient } from "../http/HttpClient";
import { STKPushRequest,STKPushResponse } from "../types/stk";
import { buildStkPushPayloads } from "../services/stk/BuildStkPushPayload";
import { generateTimestamp } from "../utils/timestamp";
import { generatePassword } from "../utils/password";
import { validateStkPushRequest } from "../services/stk/ValidateStkPushRequest";

export class MpesaClient {
    private readonly config:MpesaConfig;
    private readonly baseUrl:string;
    private readonly tokenManager:TokenManager;
    private readonly http:HttpClient;

    constructor(config:MpesaConfig){
        this.config = config;
        this.baseUrl = config.environment === "production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";

        this.tokenManager = new TokenManager(
            this.baseUrl,
            config.consumerKey,
            config.consumerSecret
        );

        this.http = new HttpClient(this.baseUrl);
    }
    
    async stkPush (request:STKPushRequest):Promise<STKPushResponse>{
        validateStkPushRequest(request);
        
        const token = await this.tokenManager.getToken();
        const timestamp = generateTimestamp();
        const password = generatePassword(
            this.config.shortCode,
            this.config.passKey,
            timestamp
        );

        const payload = buildStkPushPayloads(
            request,
            this.config.shortCode,
            password,
            timestamp,
            this.config.CallBackURL
        );       

        return this.http.post<STKPushResponse>(
            "/mpesa/stkpush/v1/processrequest",
            payload,
            token
        );
    }
}

