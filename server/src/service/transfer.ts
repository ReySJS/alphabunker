import Account from "../models/account";
import { resError, resSuccess } from "../models/response";
import Transaction from "../models/transaction";
import TransferSql from "../repository/transfer";
import AccountGetService from "./account/account-get";
import TransactionService from "./transaction";


class TransferService extends TransactionService {

    constructor(data: JSON){
        super(data);
    }

    public async create() {
        try {
            this.verificationAccount();
            this.verificationInput();
            await this.parseTransaction();
            this.verificationTransaction();
            const res = await new TransferSql(this.transaction as Transaction).transfer();
            console.log(this.transaction);
            return { code: 200, data: res} as resSuccess;
        }
        catch(err){
            throw {
                code: 400,
                msg: err
            } as resError;
        }
    }

    private async parseTransaction() {
        const accountSql = new AccountGetService(this.account as Account);
        const idAccount = await accountSql.getIdAccount();
        const value = parseFloat(this.data.value);
        
        if(!await accountSql.balanceSufficient(value+1, this.data.id)) throw "Insufficient balance"

        this.transaction = {
            "fgk_account_from": idAccount,
            "fgk_account_to": this.data.id,
            "fgk_type": 3,
            "value": value,
            "rate": 1,
            "total": value+1
        }
    }
    
}

export default TransferService;