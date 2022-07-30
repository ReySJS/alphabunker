import Account from "../models/account";
import Transaction from "../models/transaction";
import WithdrawalsSql from "../repository/withdrawals";
import AccountGetService from "./account/account-get";
import TransactionService from "./transaction";
import { resError, resSuccess } from "../models/response";

class WithdrawalsService extends TransactionService {
    constructor(data: JSON) {
        super(data);
    }

    public async create() {
        try{
            this.verificationAccount();
            this.verificationInput();
            await this.parseTransaction();
            this.verificationTransaction();
            const res = await new WithdrawalsSql(this.transaction as Transaction).withdrawals();
            return {
                code: 200,
                data: res
            } as resSuccess;
        }
        catch(err){
            throw {
                code: 400,
                msg: err
            } as resError           
        }
    }

    private async parseTransaction() {
        const accountSql = new AccountGetService(this.account as Account)
        const idAccount = await accountSql.getIdAccount();
        const value = parseFloat(this.data.value) 
        
        if(!await accountSql.balanceSufficient(value+4, idAccount)) throw "Insufficient balance"

        this.transaction = {
            "fgk_account_from": idAccount,
            "fgk_type": 2,
            "value": value,
            "rate": 4,
            "total": value+4
        }
    }
}

export default WithdrawalsService;