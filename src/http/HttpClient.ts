import { AuthenticationError } from "../errors/AuthenticationError";
import { DarajaError } from "../errors/DarajaError";
import { ValidationError } from "../errors/ValidationError";

export class HttpClient {
    constructor (private readonly baseUrl:string){}

    async post<T>(path:string, body:unknown,token:string):Promise<T>{
        const response = await fetch(`${this.baseUrl}${path}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`,
            },
            body:JSON.stringify(body),
        });

        if(!response.ok){
            const errorData = await response.json();

            const details = {
                errorCode:errorData.errorCode ?? "UNKNOWN",
                errorMessage:errorData.errorMessage ?? "Unknown Daraja error",
                requestId:errorData.requestId,
                httpStatus:response.status,
            };

            if(details.errorCode.startsWith("404.001")){
                throw new AuthenticationError(details);
            }

            if(details.errorCode.startsWith("400")){
                throw new ValidationError(details);
            }

            throw new DarajaError(details)
        }
        return response.json() as Promise<T>;
    }
}