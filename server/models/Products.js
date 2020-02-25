const {Schema, model} = require ('mongoose')


const productSchema = new Schema(
  {
    name: String,
    description: String,
    image: String,
    typeProduct: String,
    price: String,
  }
)

module.exports = model ('Products', productSchema)