import { Transaction } from "../Entities/Transaction";

interface ITransactionDTO {
    title: string;
    amount: number;
    category: string;
    type: 'deposit' | 'withdraw';
}

interface ITransactionRepository {
    create({title, amount, category, type}: ITransactionDTO): Promise<Transaction>;
    list(): Promise<Transaction[]>;
    remove(id: string): Promise<Transaction[]>;
}

export { ITransactionRepository, ITransactionDTO };