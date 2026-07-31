import { DarajaError,DarajaErrorDetails } from "./DarajaError";

export class AuthenticationError extends DarajaError {
    constructor (details:DarajaErrorDetails){
        super(details);
        this.name = "AuthenticationError";
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
}