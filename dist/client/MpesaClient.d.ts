import { MpesaConfig } from "../types/config";
import { STKPushRequest, STKPushResponse } from "../types/stk";
export declare class MpesaClient {
    private readonly config;
    private readonly baseUrl;
    private readonly tokenManager;
    private readonly http;
    constructor(config: MpesaConfig);
    stkPush(request: STKPushRequest): Promise<STKPushResponse>;
}
