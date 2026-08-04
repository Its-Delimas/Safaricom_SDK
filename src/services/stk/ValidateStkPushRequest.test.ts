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
})