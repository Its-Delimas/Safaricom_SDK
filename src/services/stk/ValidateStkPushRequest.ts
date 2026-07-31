import { stkPushSchema } from "./stkPushSchema";
import { STKPushRequest } from "../../types/stk";
import { ValidationError } from "../../errors/ValidationError";

export function validateStkPushRequest (request:STKPushRequest): void {
    const result = stkPushSchema.safeParse(request);

    if(!result.success){
        const firstIssue = result.error.issues[0];
        throw new ValidationError ({
            errorCode:"SDK_VALIDATION",
            errorMessage:firstIssue.message,
            httpStatus:0,
        });
    }
}