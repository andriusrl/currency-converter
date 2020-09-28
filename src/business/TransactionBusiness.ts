import { TransactionDatabase } from "../data/TransactionDatabase";
import { Transaction } from "../model/Transaction";
import fetch from "node-fetch";
import momentFunc from "moment"
import * as moment from 'moment';

export class TransactionBusiness {
    constructor(
        private transactionDatabase: TransactionDatabase
    ) { }
    
    public async createTransaction(
        id: string,
        origin: string,
        value: Number,
        destiny: string
    ){
        const date: moment.Moment = momentFunc()

        const taxValue = (await fetch(`${process.env.URL_EXCHANGERATESAPI}USD`, { method: 'GET' })
            .then((res) => {
                return res.json()
            })).rates[origin]
        const resultId: Number = await this.transactionDatabase.createTransaction(
             new Transaction(id, origin, value, destiny, date, taxValue)
        )
        return {
            idTransaction: resultId,
            idUser: id,
            origin: origin,
            originValue: value,
            destiny: destiny,
            destinyValue: Number(value) * parseFloat(taxValue),
            tax: taxValue,
            date: date.format("YYYY-MM-DD HH:mm:ss")
        }
    }

    public async getTransactions(
        idUser: string
    ){
        
        const result = await this.transactionDatabase.getTransactions(idUser)

        return result.map((transaction)=>{return {
            idTransaction: transaction.id,
            idUser: transaction.id_user,
            origin: transaction.origin,
            destiny: transaction.destiny,
            tax: transaction.tax,
            date: momentFunc(transaction.date).format('YYYY-MM-DD HH:mm:ss'),
            value: transaction.value
        }})
    }
}