import { Request, Response } from "express";
import { container } from "tsyringe";

import {ListTransactionsUseCase} from "./ListTransactionsUseCase";

class ListTransactionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listTransactionsUseCase = container.resolve(ListTransactionsUseCase);

        const list = await listTransactionsUseCase.execute();
        
        return response.json(list)
    }
}

export { ListTransactionsController };