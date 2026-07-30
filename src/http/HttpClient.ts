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

        if (!response.ok){
            const errorBody = await response.text();
            throw new Error(`Daraja request failed (${response.status}:${errorBody})`);
        }
        return response.json() as Promise<T>;
    }
}