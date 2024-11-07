import { Router } from 'express';
import ProductsControllers from '../controlers/ProductsControllers';

const productsRouter = Router();
const productsControllers = new ProductsControllers();

productsRouter.post('/', productsControllers.create);
productsRouter.get('/', productsControllers.index);
productsRouter.get('/:id', productsControllers.show);
productsRouter.put('/:id', productsControllers.update);
productsRouter.delete('/:id', productsControllers.delete);

export default productsRouter;
