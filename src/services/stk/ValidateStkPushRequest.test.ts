import {describe,it,expect} from "vitest";
import {validateStkPushRequest} from "./ValidateStkPushRequest";
import { ValidationError } from "../../errors/ValidationError";

describe("validateStkPushRequest",()=>{
    it("does not throw for a valid request",()=>{
        expect(()=>
            validateStkPushRequest({
                phone:"0712345678",
                amount:100,
                accountReference:"Order1",
            })).not.toThrow();
    });

    it("throws ValidationError for a negative number",()=>{
        expect(()=>
        validateStkPushRequest(
           { phone:"071345678",
            amount:-5,
            accountReference:"Order001"})
        ).toThrow(ValidationError);
    });

    it ("throws validationErrror for an empty phone number",()=>{
        expect(()=>
            validateStkPushRequest({
                phone:"",
                amount:100,
                accountReference:"Order001"
            })
        ).toThrow(ValidationError)
    })

    it("throws validationError for an account reference longer than 12 characters",()=>{
        expect(()=>
            validateStkPushRequest({
                phone:"0712345678",
                amount:100,
                accountReference:"Thisrefereceiswaytoooolongman"
            })    
        ).toThrow(ValidationError)
    });

    it("does not throw when a transaction desc is omitted",()=>{
        expect(()=>
            validateStkPushRequest({
                phone:"0712345678",
                amount:100,
                accountReference:"Order001"
            })
        ).not.toThrow();
    });
});