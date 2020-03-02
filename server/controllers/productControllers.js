const User = require ('../models/User')
const Products = require ('../models/Products')
 const Orders = require ('../models/Orders')
 const mongoose = require ('mongoose')

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

exports.createOrder = async (req, res) => {
  const order = req.body
  const {_id} = req.user
  const newOrder = await Orders.create(order)
  const ordenPopulated = await (await Orders.findById(newOrder._id)).populated(_id) 

}

// exports.createOrder =  async(req, res) => {
//   const order = req.body
//   const _id = mongoose.mongo.ObjectId(order.user_id)
//   // console.log(req.body)
//   const newOrder = await Orders.create(order)
//   const user = User.findById(_id)
//   console.log(user)


//   // quantity: 2,
//   // total: 100,
//   // products: [ '5e5bf9569fee0c545e7650da' ],
//   // user_id: '5e568d2bfefa1a229f2d601f'

//   res.status(200).json({})
// }




