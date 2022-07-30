class InputAccount {
    private errors: string[] = [];
    private data: any
    constructor(data: JSON) {
        this.data = data;
    }

    public containsErrors(){
        if(this.data.value <= 0) this.errors.push("value is zero or negative")
        this.isNumberAndLength("acct_number", 8);
        this.isNumberAndLength("acct_number_dv", 1);
        this.isNumberAndLength("agency", 4);
        this.isNumberAndLength("agency_dv", 1);
        if(this.errors) return this.joinError();

    }
    private isNumberAndLength(column: string, length: number) {
        const str = (this.data as any)[column];
        const nParse = parseFloat(str);
        if(
            isNaN(nParse) ||
            str.length !== length
        ) this.errors.push(`${column} IS INCORRET`);
    }

    private joinError(): string{
        return this.errors.join(", ")
    }
}

export default InputAccount;