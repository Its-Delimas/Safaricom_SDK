import { MpesaConfig } from "../types/config";
export declare class MpesaClient {
    private readonly config;
    private readonly baseUrl;
    private readonly tokenManager;
    constructor(config: MpesaConfig);
    testAuth(): Promise<string>;
}
