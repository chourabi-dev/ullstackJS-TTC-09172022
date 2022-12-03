const express = require('express')
const { getProducts, insertNewProduct, updateProductByID, deleteProductByID } = require('./modules/products')
const app = express()
const port = 8080

app.get('/api/products', (req, res) => {
    getProducts(req,res)
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