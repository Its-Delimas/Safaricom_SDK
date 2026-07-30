"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = generatePassword;
function generatePassword(shortCode, passkey, timeStamp) {
    const raw = `${shortCode}${passkey}${timeStamp}`;
    return Buffer.from(raw).toString("base64");
}
