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
        date: Date
    ){
        const taxValue = (await fetch(`${process.env.URL_EXCHANGERATESAPI}USD`, { method: 'GET' })
            .then((res) => {
                return res.json()
            })).rates[origin]

        const resultId: Number = await this.transactionDatabase.createTransaction(
             new Transaction(id, origin, value, destiny, date, taxValue)
        )

        console.log(taxValue)
        return {
            idTransaction: resultId,
            idUser: id,
            origin: origin,
            originValue: value,
            destiny: destiny,
            destinyValue: Number(value) * parseFloat(taxValue),
            tax: taxValue,
            date: date
        }
    }
}