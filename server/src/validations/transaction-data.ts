import Transaction from "../models/transaction";

class TransactionValidate {
    private errors: string[] = []
    private data: Transaction;
    constructor(data: Transaction) {
        this.data = data;
    }

    public containErrors(): void|string{
        this.numbers();
        console.log(this.errors)
        if(this.errors.length !== 0) return this.joinError();
    }

    private numbers() {
        if(
            isNaN(this.data.value) ||
            this.data.value < 0
            ) this.errors.push("VALUE IS INCORRET");
    }

    private joinError(): string{
        return this.errors.join(", ")
    }
}

export default TransactionValidate;