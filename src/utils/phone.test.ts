import {describe,it,expect} from "vitest";
import { normalizePhone } from "./phone";

describe("normalizePhone",()=>{
    it("converts a leading-zero number to 254 format",()=>{
        expect(normalizePhone("0712345678")).toBe("254712345678");
    });

    it("strips a leading + from an already-254 number",()=>{
        expect(normalizePhone("+254712345678")).toBe("254712345678");
    })

    it("leaves an already-correct 254 number unchanged",()=>{
        expect(normalizePhone("254712345678")).toBe("254712345678")
    })

    it("handles numbers with spaces or dashes",()=>{
        expect(normalizePhone("0712 345 678")).toBe("254712345678");
        expect(normalizePhone("0712-345-678")).toBe("254712345678");
    });
});