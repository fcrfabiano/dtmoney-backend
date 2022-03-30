import { Router } from "express";

import { CreateTransactionController } from "../controllers/createTransaction/CreateTransactionController";
import { ListTransactionsController } from "../controllers/listTransactions/ListTransactionsController";

const transactionsRoutes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();

transactionsRoutes.get('/', listTransactionsController.handle);

transactionsRoutes.post('/', createTransactionController.handle);

export { transactionsRoutes };