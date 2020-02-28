const express = require ('express');
const router = express.Router()
const Products = require('../models/Products')
const {
  getProducts} = require('../controllers/productControllers')

router.get('/menu', getProducts)

router

module.exports = router