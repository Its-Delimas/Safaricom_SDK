"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTimestamp = generateTimestamp;
function generateTimestamp() {
    const now = new Date();
    const pad = (value) => String(value).padStart(2, "0");
    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1);
    const day = pad(now.getDate());
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}
