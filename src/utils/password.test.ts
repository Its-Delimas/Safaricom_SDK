import {describe,it,expect} from "vitest"
import { generatePassword } from "./password"

describe("generatePassword",()=>{
    it("produces the correct Base64 encoding of shortcode + passkey + timestamp",()=>{
        const shortcode = "174379";
        const passkey = "testpasskey";
        const timestamp = "20260731170000";

        const result = generatePassword(shortcode,passkey,timestamp);

        const expected = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

        expect(result).toBe(expected);
    })
    it("produces a different password when the timetsamp changes",()=>{
        const shortcode = "174379";
        const passkey = "testpasskey";

        const password1 = generatePassword(shortcode,passkey,"20260731170000");
        const password2 = generatePassword(shortcode,passkey,"20260731170001")

        expect(password1).not.toBe(password2);
    })
})