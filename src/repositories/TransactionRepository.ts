import { ITransactionRepository, ITransactionDTO } from "./ITransactionRepository";
import { Transaction } from "../Entities/Transaction";

class TransactionRepository implements ITransactionRepository {
    private repository = [];

    constructor() {
    }

    async list(): Promise<Transaction[]> {
        return this.repository;
    }

    async create({title, amount, category, type}: ITransactionDTO): Promise<Transaction> {
        const transaction = new Transaction();
        transaction.title = title;
        transaction.amount = amount;
        transaction.category = category;
        transaction.type = type;

        await this.repository.push(transaction);

        return transaction;
    }

    async remove(id: string): Promise<Transaction[]> {
        this.repository = this.repository.filter(item => item.id !== id);

        return this.repository;
    }
}

export { TransactionRepository };