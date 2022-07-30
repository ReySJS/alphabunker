import Connection from ".";
import Client from "../models/client";

class ClientSql extends Connection {
    private data: Client;
    constructor(data: Client) {
        super();
        this.data = data;
    }

    public async exists(): Promise<string> {
        const id = await this.clientExists();
        //Force return string
        if(id) return id.toString();
        throw "CPF NOT REGISTERED"
    }

    public async createClient(): Promise<string|Error> {
        const id = await this.clientExists();

        if(id) throw ("CPF ALREADY EXISTS");
        
        return await this.insertClient();
    }

    private async clientExists(): Promise<string|void> {
        const result = (await this.db.query(`SELECT id FROM clients WHERE cpf='${this.data.cpf}'`)).rows[0]
        if(result) return result.id
    }

    private async insertClient(): Promise<string> {
        try {
            const query = `INSERT INTO clients(name, cpf, birth_date, email) 
                VALUES('${this.data.name}', '${this.data.cpf}', '${this.data.birth_date}', '${this.data.email}') RETURNING id`
                
            return (await this.db.query(query)).rows[0].id;
        }
        catch(err){
            throw err;
        }
    }
}

export default ClientSql;