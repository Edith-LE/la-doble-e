const User = require ('../models/User')
const Products = require ('../models/Products')
const Orders = require ('../models/Orders')

exports.getProducts = async(req, res) =>{
  const productos = await Products.find()
  res.status (200).json({productos})
}

exports.productDetail = async (req, res) =>{
  const {product_id} = req.params
  const product = await Products.findById(product_id)
  res.status(200).json({product})
}

exports.cakes = async (req, res) =>{
  const cake = "Pastel"
  const pasteles = await Products.find({typeProduct: cake})
  res.status(200).json({pasteles})
}

exports.cupcakes = async (req, res) => {
  const cupcake = "Cupcake"
  const panque = await Products.find({typeProduct: cupcake})
  res.status(200).json({panque})
}

exports.cookies = async(req, res) => {
  const cookie = "Galleta"
  const galleta = await Products.find({typeProduct: cookie})
  res.status(200).json({galleta})
}




