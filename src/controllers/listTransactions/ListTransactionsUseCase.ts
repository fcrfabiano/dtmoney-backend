import { Transaction } from "src/Entities/Transaction";
import { ITransactionRepository } from "src/repositories/ITransactionRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListTransactionsUseCase {
    constructor (
        @inject("TransactionRepository")
        private transactionsRepository: ITransactionRepository
    ){}

    async execute(): Promise<Transaction[]> {
        const list = await this.transactionsRepository.list();

        return list;
    }
}

export { ListTransactionsUseCase };