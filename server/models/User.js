const {Schema, model } = require ('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    photoProfile:{
      type: String,
      default: ''
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Orders'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, {usernameField: "email"})

module.exports = model("User", userSchema)