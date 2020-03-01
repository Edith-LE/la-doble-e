const express = require ('express');
const router = express.Router()
const {
  getProducts,
  productDetail,
  cakes,
  cupcakes,
  cookies
} = require('../controllers/productControllers')

router.get('/menu', getProducts)
router.get('/detail/:product_id', productDetail)
router.get ('/pasteles', cakes)
router.get('/cupcakes', cupcakes)
router.get('/pasticeria', cookies)




module.exports = router