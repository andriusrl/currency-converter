"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRouter = void 0;
var express_1 = __importDefault(require("express"));
var TransactionController_1 = require("../controller/TransactionController");
exports.transactionRouter = express_1.default.Router();
exports.transactionRouter.post("/create", new TransactionController_1.TransactionController().createTransaction);
exports.transactionRouter.get("/get", new TransactionController_1.TransactionController().getTransactions);
