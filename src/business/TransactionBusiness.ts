import { TransactionDatabase } from "../data/TransactionDatabase";
import { Transaction } from "../model/Transaction";

export class TransactionBusiness {
    constructor(
        private transactionDatabase: TransactionDatabase
    ) { }
    
    public async createTransaction(
        id: string,
        origin: string,
        destiny: string,
        tax: Number,
        date: Date
    ){
        await this.transactionDatabase.createTransaction(
            new Transaction(id, origin, destiny, tax, date)
        )
    }
}