import { TransactionDatabase } from "../data/TransactionDatabase";
import { Transaction } from "../model/Transaction";
import fetch from "node-fetch";

export class TransactionBusiness {
    constructor(
        private transactionDatabase: TransactionDatabase
    ) { }
    
    public async createTransaction(
        id: string,
        origin: string,
        value: Number,
        destiny: string,
        tax: Number,
        date: Date
    ){
        const result = await this.transactionDatabase.createTransaction(
             new Transaction(id, origin, value, destiny, tax, date)
        )

        const taxValue = (await fetch(`${process.env.URL_EXCHANGERATESAPI}USD`, { method: 'GET' })
            .then((res) => {
                return res.json()
            })).rates[origin]

        console.log(taxValue)
        return "Tudo certo"
    }
}