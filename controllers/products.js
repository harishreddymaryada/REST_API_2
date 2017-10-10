
import Product from '../models/products'

export const getProducts = (req,res) => {
  Product.find().exec((err,results) => {
    if(err){
    return res.json({'success':false,'message':'Cannot Fetch products'});
    }
return res.json({'success':true,'message':'fetched all products',results});
  });
}

export const newProduct = (req,res) =>{
  const newProduct = new Product(req.body);
  newProduct.save((err,result) => {
    if(err){
      return res.json({'success':false,'message':'Cannot add new product'})
    }
      return res.json({'success':true,'message':'New Product Added',result})
  });
}

export const editProduct = (req,res) => {
  Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,result) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(result);
    return res.json({'success':true,'message':'Updated successfully',result});
  })
}

export const getProduct =(req,res) =>{
  // let id = req.params.id
  // Product.findById(id).exec((err,result) =>{
   Product.find({_id:req.params.id}).exec((err,result) =>{


    if(err){
      return res.json({'success':false,'message':'Error'});
    }
    else if (result.length) {
      return res.json({'success':true,'message':'Product found with the ID',result});
    }
    else{
      return res.json({'success':false,'message':'No products with these ID'})
    }
  })
}
