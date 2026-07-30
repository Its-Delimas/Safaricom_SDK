import { STKPushRequest, DarajaSTKPushPayload } from "../../types/stk";
export declare function buildStkPushPayloads(request: STKPushRequest, shortcode: string, password: string, timestamp: string, callbackUrl: string): DarajaSTKPushPayload;
