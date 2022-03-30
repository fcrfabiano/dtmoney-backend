import { v4 as uuid } from "uuid";

class Transaction {
    id?: string;
    title: string;
    amount: number;
    category: string;
    type: 'deposit' | 'withdraw';
    created_at: Date;
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
            this.created_at = new Date(Date.now());
            this.updated_at = new Date(Date.now());
        }
    }
}

export { Transaction };