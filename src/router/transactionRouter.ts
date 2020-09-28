import express from  "express";
import { TransactionController } from "../controller/TransactionController";

export const transactionRouter = express.Router()

transactionRouter.post("/create", new TransactionController().createTransaction)
transactionRouter.get("/get", new TransactionController().getTransactions)
