import { container } from "tsyringe";

import { ITransactionRepository } from "../../repositories/ITransactionRepository";
import { TransactionRepository } from "../../repositories/TransactionRepository";

container.registerSingleton<ITransactionRepository>(
    "TransactionRepository",
    TransactionRepository
);