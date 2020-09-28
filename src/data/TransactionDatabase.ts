import { Transaction } from "../model/Transaction";
import {BaseDataBase} from "./BaseDatabase";


export class TransactionDatabase extends BaseDataBase {
    protected tableName: string = "Transactions";

    public async createTransaction(transaction: Transaction): Promise<Number> {

        console.log(transaction)
        const result = await super.getConnection().raw(`
            INSERT INTO ${this.tableName} (id_user, origin, value, destiny, date, tax)
            VALUES (
            '${transaction.getId()}',
            '${transaction.getOrigin()}',
            '${transaction.getValue()}',
            '${transaction.getDestiny()}',
            '${transaction.getDate()}',
            '${transaction.getTax()}'
            );
        `)
        await super.destroyConnection()
        return result[0].insertId
    }
}