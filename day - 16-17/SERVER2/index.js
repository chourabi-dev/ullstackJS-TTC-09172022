const express = require('express')
const { getProducts, insertNewProduct, updateProductByID, deleteProductByID, searchProducts } = require('./modules/products')
const app = express()
const port = 8080
var jwt = require('jsonwebtoken');
var url = require("url");
const { createAccount, auth } = require('./modules/users');
var cors = require('cors')


app.use(cors())


// middleware !!!

app.use(function(req,res,next){
  console.log(new Date());

  const path = url.parse(req.url,true).pathname;
  

  if( path === '/api/get-token' || path ==='/api/auth/create-account' || path==='/api/auth/signin' ){
    next();
  }else{
    
  const token = req.headers.authorization;


  try {
    jwt.verify(token, 'azertyuytrezazertyuytr14521545145', function(err, decoded) {
    
   
      if (err) {
        
        res.send({ message:'access denied' })
      }else{

        // ...
        next();
      }
  
      
      
    });
  } catch (error) {
    res.send({ message:'access denied' })
  }


  }


})





app.get("/api/get-token",(req,res)=>{

  var token = jwt.sign({ user:"chourabi taher" }, 'azertyuytrezazertyuytr14521545145');


  res.send( { token: token } )


})



app.post('/api/auth/create-account',(req,res)=>{
  createAccount(req,res);
})



app.post('/api/auth/signin',(req,res)=>{
  auth(req,res);
})




app.get('/api/products', (req, res) => {
  getProducts(req,res)
})

app.get('/api/products/search', (req, res) => {
  searchProducts(req,res)
})


app.post('/api/products', (req, res) => {
   insertNewProduct(req,res);
})


app.put('/api/products', (req, res) => {
  updateProductByID(req,res);
})


app.delete('/api/products', (req, res) => {
  deleteProductByID(req,res);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})