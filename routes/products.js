import express from 'express'
import * as products from '../controllers/products'

const router = express.Router()


router.route('/')
      .get(products.getProducts)
      .post(products.newProduct)
      .put(products.editProduct)

router.route('/:id')
      .get(products.getProduct)

export default router
