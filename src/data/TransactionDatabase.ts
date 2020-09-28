import { Transaction } from "../model/Transaction";
import {BaseDataBase} from "./BaseDatabase";


export class TransactionDatabase extends BaseDataBase {
    protected tableName: string = "Transactions";

    public async createTransaction(transaction: Transaction): Promise<void> {

        console.log(transaction)
        await super.getConnection().raw(`
            INSERT INTO ${this.tableName} (id, origin, value, destiny, tax, date)
            VALUES (
            '${transaction.getId()}',
            '${transaction.getOrigin()}',
            '${transaction.getValue()}',
            '${transaction.getDestiny()}',
            '${transaction.getTax()}',
            '${transaction.getDate()}'
            );
        `)
        await super.destroyConnection()
    }
}