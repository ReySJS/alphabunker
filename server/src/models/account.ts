interface Account {
    id?: string
    owner: string
    agency: string
    agency_dv: string
    acct_number: string
    acct_number_dv: string
    balance?: number
}

export default Account