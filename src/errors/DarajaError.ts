export interface DarajaErrorDetails {
    errorCode:string;
    errorMessage:string;
    requestId?:string;
    httpStatus:number;
}

export class DarajaError extends Error {
    public readonly errorCode:string;
    public readonly requestId?:string;
    public readonly httpStatus:number;

    constructor ( details:DarajaErrorDetails){
        super(details.errorMessage);
        this.name="DarajaError";
        this.errorCode=details.errorCode;
        this.requestId = details.requestId;
        this.httpStatus = details.httpStatus;

        Object.setPrototypeOf(this,DarajaError.prototype);
    }
}