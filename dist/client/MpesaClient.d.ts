import { MpesaConfig } from "../types/config";
export declare class MpesaClient {
    private readonly config;
    private readonly baseUrl;
    constructor(config: MpesaConfig);
    testauth(): Promise<string>;
}
