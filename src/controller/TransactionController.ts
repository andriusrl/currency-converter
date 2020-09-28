import { Request, Response } from "express";
import { TransactionBusiness } from "../business/TransactionBusiness";
import { TransactionDatabase } from "../data/TransactionDatabase";

export class TransactionController {
   

    async createTransaction(req: Request, res: Response) {
        try{
            const result = await new TransactionBusiness(new TransactionDatabase).createTransaction(
                req.body.id,
                req.body.origin,
                req.body.value,
                req.body.destiny,
                req.body.date
            )
            res.status(200).send(result)
        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message })
        }
    }

}