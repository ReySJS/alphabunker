import Account from "../models/account";
import { resError, resSuccess } from "../models/response";
import Transaction from "../models/transaction";
import DepositSql from "../repository/deposit";
import StatementSql from "../repository/statement";
import AccountValidate from "../validations/account-data";
import AccountGetService from "./account/account-get";
import TransactionService from "./transaction";


class StatementService {
    private data: any;
    private account: Account|undefined;

    constructor(data: JSON){
        this.data = data;
    }

    public async create() {
        try {
            await this.parse();
            this.verificationAccount();
            const res = await new StatementSql(this.account as Account).get();
            console.log(res)
            return { code: 200, data: res} as resSuccess;
        }
        catch(err){
            throw {
                code: 400,
                msg: err
            } as resError;
        }
    }

    private verificationAccount() {
        const errors = new AccountValidate(this.account as Account).containErrors();
        if(errors) throw errors;
    }

    private async parse() {
        this.account = {
            "owner": "",
            "agency": this.data.agency,
            "agency_dv": this.data.agency_dv,
            "acct_number": this.data.acct_number,
            "acct_number_dv": this.data.acct_number_dv
        } as Account;
        this.account.id = await new AccountGetService(this.account).getIdAccount();
        console.log(this.account)
    }
    
}

export default StatementService;