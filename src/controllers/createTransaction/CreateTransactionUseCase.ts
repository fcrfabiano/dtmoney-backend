import { Transaction } from "src/Entities/Transaction";
import { inject, injectable } from "tsyringe";

import { ITransactionDTO, ITransactionRepository } from "../../repositories/ITransactionRepository";

@injectable()
class CreateTransactionUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionsRepository: ITransactionRepository
    ) {}
    
    async execute(transaction: ITransactionDTO): Promise<Transaction> {
        const newTransaction = await this.transactionsRepository.create(transaction);

        return newTransaction;
    }
}

export { CreateTransactionUseCase };