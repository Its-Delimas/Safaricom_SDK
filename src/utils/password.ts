export function generatePassword (shortCode:string,passkey:string,timeStamp:string): string {
    const raw = `${shortCode}${passkey}${timeStamp}`;
    return Buffer.from(raw).toString("base64");
}