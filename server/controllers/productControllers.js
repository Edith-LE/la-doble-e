const User = require ('../models/User')
const Products = require ('../models/Products')
const Orders = require ('../models/Orders')

exports.getProducts = (req, res) =>{
  const productos = Products.find()
  return res.status(200).json([
    {
      _id: 'turin11234567890uasd',
      name: 'Cupcakes conejo Turin1',
      description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
      image:'http://localhost:3000/images/pastel_conejitos.jpg',
      typeProduct: 'Pastel',
      price: '$300.00'
    },
    { 
      _id: 'turin2xdfvbhjnmlmlmñ',
      name: 'Cupcakes conejo Turin2',
      description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
      image:'http://localhost:3000/images/pastel_conejitos.jpg',
      typeProduct: 'Pastel',
      price: '$300.00'
    },
    {
      _id: 'turin3567890cdvgbhnjmk',
      name: 'Cupcakes conejo Turin3',
      description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
      image:'http://localhost:3000/images/pastel_conejitos.jpg',
      typeProduct: 'Pastel',
      price: '$300.00'
    },
    {
      _id: 'turin498767ibjhgdcfgfvk',
      name: 'Cupcakes conejo Turin',
      description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
      image:'http://localhost:3000y/images/pastel_conejitos.jpg',
      typeProduct: 'Pastel',
      price: '$300.00' 

    }
  ])
  // res.status (200).json({productos})
}

exports.productDetail =  (req, res) =>{
  const {product_id} = req.params
 // const product =  Products.findById(product_id)
  res.status(200).json({
    _id: 'turin11234567890uasd',
    name: 'Cupcakes conejo Turin1',
    description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
    image:'http://localhost:3000/images/pastel_conejitos.jpg',
    typeProduct: 'Pastel',
    price: '$300.00'
  })
}

exports.cakes =  (req, res) =>{
  const cake = "Pastel"
  const pasteles =  Products.find({typeProduct: cake})
  res.status(200).json({    
  _id: 'turin11234567890uasd',
  name: 'Cupcakes conejo Turin1',
  description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
  image:'http://localhost:3000/images/pastel_conejitos.jpg',
  typeProduct: 'Pastel',
  price: '$300.00'
})
}

exports.cupcakes =  (req, res) => {
  const cupcake = "Cupcake"
  const panque =  Products.find({typeProduct: cupcake})
  res.status(200).json({
    _id: 'turin11234567890uasd',
    name: 'pastel de chocolate',
    description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
    image:'http://localhost:3000/images/pastel_conejitos.jpg',
    typeProduct: 'Pastel',
    price: '$300.00'

  })
}

exports.cookies = async(req, res) => {
  const cookie = "Galleta"
  const galleta = await Products.find({typeProduct: cookie})
  res.status(200).json({
    _id: 'turin11234567890uasd',
    name: 'pastel de zanahoria',
    description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
    image:'http://localhost:3000/images/pastel_conejitos.jpg',
    typeProduct: 'Pastel',
    price: '$300.00'
  })
}


