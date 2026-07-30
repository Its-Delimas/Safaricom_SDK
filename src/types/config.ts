export interface MpesaConfig {
    consumerKey:string;
    consumerSecret:string;
    shortCode:string;
    passKey:string;
    environment:"sandbox"|"production";
    CallBackURL:string;
}