interface Transaction {
    id?: string
    value: number
    fgk_type: number
    rate: number
    total: number
    fgk_account_from: string
    fgk_account_to?: string
}

export default Transaction;