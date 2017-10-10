import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import logger from 'morgan'
import bb from 'express-busboy'
import products from './routes/products'
import SourceMapSupport from 'source-map-support'


SourceMapSupport.install();

const DB_URL ='mongodb://localhost/restapi_test1'

mongoose.connect(DB_URL,{useMongoClient: true,},(err,res)=>{
                  if(err){
                    console.log('Failed to connect mongodb')
                  }else{
                    console.log('Successfully connected to DB'+DB_URL)
                  }
                })


const app = express()
bb.extend(app)


//allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


//confi app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


app.get('/',(req,res)=>{
  res.send("hello world")
})

app.use('/products', products);

//catch 404 Error
app.use((req, res, next) => {
  res.status(404).send('<h1 align=center>Page Not Found!</h1>');
});


const port = process.env.PORT || 4000

app.listen(port,()=>{
  console.log(`Running on Port ${port}`)

})
