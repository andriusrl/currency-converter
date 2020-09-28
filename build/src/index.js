"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var transactionRouter_1 = require("./router/transactionRouter");
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/transaction/", transactionRouter_1.transactionRouter);
var server = app.listen(3003, function () {
    if (server) {
        var address = server.address();
        console.log("Servidor rodando em http://localhost:" + address.port);
    }
    else {
        console.error("Falha ao rodar o servidor.");
    }
});
