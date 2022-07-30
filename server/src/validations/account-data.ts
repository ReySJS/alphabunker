import Account from "../models/account";

class AccountValidate {
    private errors: string[] = [];
    private data: Account

    constructor(data: Account){
        this.data = data
    }
    
    public containErrors(): void|string {
        this.hasDataNull()
        if(this.errors) return this.joinError();
    }

    private hasDataNull() {
        if(!this.data.agency) this.errors.push("agency IS REQUIRED");
        if(!this.data.agency_dv) this.errors.push("agency_dv IS REQUIRED");
        if(!this.data.acct_number) this.errors.push("acct_number IS REQUIRED");
        if(!this.data.acct_number_dv) this.errors.push("acct_number_dv IS REQUIRED");
    }

   

    private joinError(): string{
        return this.errors.join(", ")
    }
}

export default AccountValidate;