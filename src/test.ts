import { MpesaClient } from "./client/MpesaClient";

const mpesa = new MpesaClient ({
    consumerKey:"",
    consumerSecret:"",
    shortCode:"174379",
    passKey:"",
    environment:"sandbox"
});

mpesa.testauth().then((token)=>{
    console.log("Access token:",token);
});