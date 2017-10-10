import mongoose from 'mongoose'


var ProductSchema = mongoose.Schema({
  createdAt:{
    type:Date,
    default:Date.now()
  },
  productname:String

})

export default mongoose.model('Product',ProductSchema)
