import Connection from ".";
import Account from "../models/account";

class StatementSql extends Connection {
    private account: Account;
    constructor(data: Account){
        super();
        this.account = data;
    }

    public async get(): Promise<object> {
        return await this.query();
    }

    private async query(): Promise<object>{
        const query = `
        SELECT date_time as "date time", value, rate, total, type.name, coalesce(accounts.agency, '') AS "destinatary_agency", coalesce(accounts.agency_dv, '') AS "destinatary_agency_dv", coalesce(accounts.acct_number, '') AS "destinatary_number_account", coalesce(acct_number_dv, '') AS "destinatary_number_account-dv"  FROM transactions
        INNER JOIN types_transactions AS type ON type.id=fgk_type LEFT JOIN accounts ON transactions.fgk_account_to = accounts.id WHERE fgk_account_from='${this.account.id}' OR fgk_account_to='${this.account.id}'
        `
        console.log(query)
        const queryBalance = `
        SELECT balance FROM accounts WHERE id='${this.account.id}'
        `
        return { 
            statement: (await this.db.query(query)).rows,
            balance: (await this.db.query(queryBalance)).rows
        };
    }
}

export default StatementSql;