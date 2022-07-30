import Account from "../../models/account";
import AccountSql from "../../repository/account";

class AccountGetService {
    private account: Account;
    
    constructor(account: Account) {
        this.account = account;
    }

    public async getIdAccount(): Promise<string> {
        const id = await new AccountSql(this.account).idAccount();
        if(id) return id.toString();
        throw "ACCOUNT NOT EXISTS "
    }

    public async balanceSufficient(value: number, id: string): Promise<boolean> {
        const balance = parseFloat(await new AccountSql(this.account).getBalance(id));
        console.log(balance, value)
        return balance >= value;
    }    
}

export default AccountGetService;