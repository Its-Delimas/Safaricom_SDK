import { DarajaError,DarajaErrorDetails } from "./DarajaError";

export class ValidationError extends DarajaError {
    constructor (details:DarajaErrorDetails){
        super(details);
        this.name = "ValidationError";
        Object.setPrototypeOf(this,ValidationError.prototype);
    }
}