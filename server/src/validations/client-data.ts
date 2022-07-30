import Client from "../models/client";

class ClientValidate {
    private errors: string[] = [];
    private data: Client
    private regexCpf = /(\d{3})[.]?(\d{3})[.]?(\d{3})[-]?(\d{2})/gm;
    private regexEmail = /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/;
    
    constructor(data: Client) {
        this.data = data;
    }

    public containError(): string|void{
        this.hasDataNull()
        if(this.errors.length !== 0)  return this.joinError()
        this.validateWithRegex()
        if(this.errors.length !== 0)  return this.joinError()
    }

    private hasDataNull() {
        if(!this.data.name) this.errors.push("name IS REQUIRED")
        if(!this.data.cpf) this.errors.push("cpf IS REQUIRED")
        if(!this.data.birth_date) this.errors.push("birth_date IS REQUIRED")
        if(!this.data.email) this.errors.push("email IS REQUIRED")
    }

    private validateWithRegex() {
        if(!this.regexCpf.test(this.data.cpf)) this.errors.push("cpf IS INCORRET");
        if(!this.regexEmail.test(this.data.email)) this.errors.push("email IS INCORRET");
    }

    private joinError(): string{
        return this.errors.join(", ")
    }
}

export default ClientValidate;