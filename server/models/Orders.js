const {Schema, model} = require ('mongoose')


const orderSchema = new Schema(
  {
    products: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Products' 
      }
    ],
    quantity:Number,    
    total: Number
  },
    {
      timestamps: true
    }
)

module.exports = model('Orders', orderSchema)