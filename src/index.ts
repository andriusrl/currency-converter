
import express from "express";
import {AddressInfo} from "net";
import {transactionRouter} from "./router/transactionRouter"
import cors from "cors";

const app = express();

app.use(cors())

app.use(express.json());

app.use("/transaction/", transactionRouter)


const server = app.listen(process.env.PORT || 8080, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});