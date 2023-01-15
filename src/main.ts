class XernerxLanguage {
    name: string;
    client: Client;

    constructor(client: Client) {
        this.name = "XernerxLanguage";

        this.client = client;
    }
}

interface Client {

}

export { XernerxLanguage }