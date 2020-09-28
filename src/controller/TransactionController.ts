import { Request, Response } from "express";
import { TransactionBusiness } from "../business/TransactionBusiness";
import { TransactionDatabase } from "../data/TransactionDatabase";

export class TransactionController {
   

    async createTransaction(req: Request, res: Response) {
        try{
            if ((req.body.id === undefined) || (req.body.origin === undefined) || (req.body.value === undefined) || (req.body.destiny === undefined)) {
                throw new Error("Request body is missing information")
            }

            const result = await new TransactionBusiness(new TransactionDatabase).createTransaction(
                req.body.id,
                req.body.origin,
                req.body.value,
                req.body.destiny
            )
            res.status(200).send(result)
        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message })
        }
    }

    async getTransactions(req: Request, res: Response) {
        try{
            if (req.body.id === undefined) {
                throw new Error("Request body is missing information")
            }
            const result = await new TransactionBusiness(new TransactionDatabase).getTransactions(
                req.body.id
            )
            res.status(200).send(result)
        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message })
        }
    }

}