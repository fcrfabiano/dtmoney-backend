import { Router } from 'express';

import { transactionsRoutes } from './transactions.routes';

const routes = Router();

routes.get('/health', (req, res) => {
    return res.json({ status: 'OK' });
});
routes.use('/transactions', transactionsRoutes);

export { routes };