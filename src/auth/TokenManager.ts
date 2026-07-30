export class TokenManager {
    constructor(
        private readonly baseUrl:string,
        private readonly consumerKey: string,
        private readonly consumerSecret:string
    ){}

    async getToken(): Promise<string> {
        const credentials = Buffer.from(
            `${this.consumerKey}:${this.consumerSecret}`
        ).toString("base64");

        const response = await fetch (
            `${this.baseUrl}/oauth/v1/generate?grant_type=client_credentials`,
            {
                method:"GET",
                headers:{
                    Authorization:`Basic ${credentials}`,
                },
            }
        );

        if(!response.ok){
            throw new Error (`Failed to fetch token:${response.status}`);
        }
        const data = await response.json()
        return data.access_token;
    }
}