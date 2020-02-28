const User = require ('../models/User')
const Products = require ('../models/Products')
const Orders = require ('../models/Orders')

exports.getProducts = (req, res) =>{
  const productos = Products.find()
  return res.status(200).json([
    {
      name: 'Cupcakes conejo Turin',
      description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
      image:'http://localhost:3000/images/pastel_conejitos.jpg',
      typeProduct: 'Pastel',
      price: '$300.00'
    },
    { 
      name: 'Cupcakes conejo Turin',
      description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
      image:'http://localhost:3000/images/pastel_conejitos.jpg',
      typeProduct: 'Pastel',
      price: '$300.00'
    },
    {
      name: 'Cupcakes conejo Turin',
      description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
      image:'http://localhost:3000/images/pastel_conejitos.jpg',
      typeProduct: 'Pastel',
      price: '$300.00'
    },
    {
      name: 'Cupcakes conejo Turin',
      description: 'Pastel con crema de chocolate con leche marca Turin y pan de vainilla, decorado con el famoso conejito Turín',
      image:'http://localhost:3000y/images/pastel_conejitos.jpg',
      typeProduct: 'Pastel',
      price: '$300.00' 

    }
  ])
  // res.status (200).json({productos})
}

