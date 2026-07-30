"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MpesaClient_1 = require("./client/MpesaClient");
const password_1 = require("./utils/password");
const timestamp_1 = require("./utils/timestamp");
const mpesa = new MpesaClient_1.MpesaClient({
    consumerKey: "",
    consumerSecret: "",
    shortCode: "174379",
    passKey: "",
    environment: "sandbox",
    callbackUrl: "https://mydomain.com/callback"
});
mpesa.testAuth().then((token1) => {
    console.log("First call:", token1);
    mpesa.testAuth().then((token2) => {
        console.log("Second call:", token2);
        console.log("Same token?", token1 === token2);
    });
});
const timestamp = (0, timestamp_1.generateTimestamp)();
console.log("Timestamp", timestamp);
const password = (0, password_1.generatePassword)("174379", "my_passkey", timestamp);
console.log("password", password);
