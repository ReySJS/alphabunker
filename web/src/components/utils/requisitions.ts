import { api } from "../../libs/api";

export async function createAccount(cpf: string, email: string, birth_date: Date) {
    try {
        const result = (await api.post("/account", {
            cpf, 
            email, 
            birth_date
        }))
        if(result.status !== 201) throw "in route: account"

        return result.data
    }catch(e) {
        return e
    }
}

export async function createStatement(agency: number, agency_dv: number, acct_number: number, acct_dv: number) {
    try {
        const result = (await api.post("/account", {
            agency, 
            agency_dv,
            acct_number,
            acct_dv
        }))
        if(result.status !== 201) throw "in route: account"

        return result.data
    }catch(e) {
        return e
    }
}