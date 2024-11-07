import productsRouter from '@modules/products/routes/ProductRoutes';
import { Router } from 'express';

const routes = Router();

routes.get('/health', (request, response) => {
  response.json({ message: 'Hello Dev! I am alive' });
});
routes.use('/products', productsRouter);

export default routes;
