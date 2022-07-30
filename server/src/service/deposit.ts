import Account from "../models/account";
import { resError, resSuccess } from "../models/response";
import Transaction from "../models/transaction";
import DepositSql from "../repository/deposit";
import AccountGetService from "./account/account-get";
import TransactionService from "./transaction";


class DepositService extends TransactionService {

    constructor(data: JSON){
        super(data);
    }

    public async create() {
        try {
            this.verificationAccount();
            this.verificationInput();
            await this.parseTransaction();
            this.verificationTransaction();
            const res = await new DepositSql(this.transaction as Transaction).deposit();
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
        const rate = parseFloat(this.data.value)/100;
        
        const idAccount = await new AccountGetService(this.account as Account).getIdAccount()

        this.transaction = {
            "fgk_account_from": idAccount,
            "fgk_type": 1,
            "value": parseFloat(this.data.value),
            "rate": rate,
            "total": parseFloat(this.data.value)-rate
        }
    }
    
}

export default DepositService;