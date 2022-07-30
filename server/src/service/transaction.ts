import Account from "../models/account";
import Transaction from "../models/transaction";
import AccountValidate from "../validations/account-data";
import InputAccount from "../validations/input-user/account-input";
import TransactionValidate from "../validations/transaction-data";

class TransactionService {
    protected data: any;
    protected account: Account|undefined;
    protected transaction: Transaction|undefined

    constructor(data: JSON) {
        this.data = data as any;
        this.parse()
    }

    protected verificationAccount() {
        const errors = new AccountValidate(this.account as Account).containErrors();
        if(errors) throw errors;
    }

    protected verificationTransaction() {
        let errors = new TransactionValidate(this.transaction as Transaction).containErrors();
        if(errors) throw errors
    }


    protected verificationInput() {
        let errors = new InputAccount(this.data).containsErrors()
        if(errors) throw errors
    }

    private parse() {
        this.account = {
            "owner": "",
            "agency": this.data.agency,
            "agency_dv": this.data.agency_dv,
            "acct_number": this.data.acct_number,
            "acct_number_dv": this.data.acct_number_dv
        } as Account
    }
}

export default TransactionService;