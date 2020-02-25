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

model.exports = model ('Orders', orderSchema)