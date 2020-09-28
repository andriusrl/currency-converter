import { Transaction } from "../model/Transaction";
import {BaseDataBase} from "./BaseDatabase";
import moment from "moment"


export class TransactionDatabase extends BaseDataBase {
    protected tableName: string = "Transactions";

    public async createTransaction(transaction: Transaction): Promise<Number> {
        const result = await super.getConnection().raw(`
            INSERT INTO ${this.tableName} (id_user, origin, value, destiny, date, tax)
            VALUES (
            '${transaction.getId()}',
            '${transaction.getOrigin()}',
            '${transaction.getValue()}',
            '${transaction.getDestiny()}',
            '${moment(transaction.getDate()).format('YYYY-MM-DD HH:mm:ss')}',
            '${transaction.getTax()}'
            );
        `)
        await super.destroyConnection()
        return result[0].insertId
    }

    public async getTransactions(idUser: string): Promise<any> {
        const result = await this.getConnection().raw(`
            SELECT * FROM ${this.tableName}
                WHERE id_user = "${idUser}";
        `)
        await super.destroyConnection()
        return result[0]
    }
}