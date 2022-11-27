const express = require('express')
const { getProducts } = require('./modules/products')
const app = express()
const port = 8080

app.get('/api/products', (req, res) => {
    getProducts(req,res)
})


app.post('/api/products', (req, res) => {
   
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})