import Client from "../../models/client";
import Account from "../../models/account";
import ClientSql from "../../repository/client";
import AccountSql from "../../repository/account";
import ClientValidate from "../../validations/client-data";
import { resError, resSuccess } from "../../models/response";


class AccountInsertService {
    private data: any;
    private client: Client | undefined;
    private account: Account | undefined;

    constructor(data: JSON) {
        this.data = data
    }

    public async create() {
        try{
            this.parse();
            const error = this.validation();
            if(error) throw error;
            const res = await this.createAccount(); 
            return res
        }
        catch(err){
            console.log(err)
            throw {
                code: 400,
                msg: err
            } as resError
            
        }
    }

    private validation(): void|string{
        const clientHasError = new ClientValidate(this.client as Client).containError();
        console.log(clientHasError);
        if(clientHasError) return clientHasError;
    }

    private parse() {
        let cpfTemp: string = this.data.cpf;
        cpfTemp = cpfTemp.replaceAll(".", "");
        cpfTemp = cpfTemp.replace("-", "");

        this.client = {
            "name": this.data.name,
            "cpf": cpfTemp,
            "birth_date": this.data.birth_date,
            "email": this.data.email
        }
    }
    private async createAccount() {
        try {
            const idClient = await new ClientSql(this.client as Client).createClient();
            if(typeof idClient !== "string") throw idClient;

            this.account = {
                owner: idClient,
                agency: this.generatorNumber(4),
                agency_dv: this.generatorNumber(1),
                acct_number: this.generatorNumber(8),
                acct_number_dv: this.generatorNumber(1)
            }

            return {
                "code": 201,
                "data": await new AccountSql(this.account).createAccount()
            } as resSuccess
        }
        catch(err) {
            const tempErr = err as any
            if(tempErr.detail && tempErr.detail.includes("email") && tempErr.code === "23505") throw "EMAIL ALREADY EXISTS"
            throw err
        }
    }

    private generatorNumber(size: number): string {
        let str = ""
        for (let i = 0; i < size; i++) {
            str += Math.floor(Math.random() * 10).toString();
        }
        return str
    }
}


export default AccountInsertService;