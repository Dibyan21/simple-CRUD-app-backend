import express from 'express';
import product from '../models/product.model.js';
import {getProduct, getSingleProduct, createProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProduct);

router.get('/:id', getSingleProduct);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;