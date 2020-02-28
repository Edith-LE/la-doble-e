const {Schema, model} = require ('mongoose')


const productSchema = new Schema(
  {
    name: String,
    description: String,
    image: String,
    typeProduct: {
      type: String,
      enum:["Pastel", "Cupcake", "Galleta"]
    },
    price: String,
  }
)

module.exports = model ('Products', productSchema)