import Connection from ".";
import Transaction from "../models/transaction";


class TransferSql extends Connection {
    private data: Transaction;

    constructor(data: Transaction) {
        super();
        this.data = data;
    }

    public async transfer() {
        await this.updateBalance();
        return await this.insertTransaction()
    }

    private async insertTransaction() {
        const query = `INSERT INTO transactions(value, rate, total, fgk_type, fgk_account_from, fgk_account_to) 
            VALUES('${this.data.value}', '${this.data.rate}', '${this.data.total}', '${this.data.fgk_type}', '${this.data.fgk_account_from}', '${this.data.fgk_account_to}') RETURNING value, rate, total`
        return (await this.db.query(query)).rows[0];
    }

    private async updateBalance() {
        const queryTo = `UPDATE accounts SET balance = balance+${this.data.value} WHERE id='${this.data.fgk_account_from}'`
        const queryFrom = `UPDATE accounts SET balance = balance-${this.data.total} WHERE id='${this.data.fgk_account_to}'`
        await this.db.query(queryTo)
        await this.db.query(queryFrom)
    }
}

export default TransferSql;