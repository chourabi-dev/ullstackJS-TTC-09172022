/*
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080); */

const express = require('express')
const app = express()
const port = 8080

const dateModule = require('./modules/dateModule');

/*  METHODS !!!!
app.get('/user', (req, res) => {
  res.send('user')
})

app.post('/user', (req, res) => {
    res.send('add user')
})

app.put('/user', (req, res) => {
res.send('update user')
})

app.delete('/user', (req, res) => {
res.send('delete user')
})


*/


/*
app.get("/date",  (req,res)=>{

    // all informations from USER stocked in req
    // all method that you can use to respond to user are stocked in res



    const dateSTR = dateModule.getDate()+' / '+dateModule.getYear();



    res.send( { date: dateSTR } );
    


}  )*/








// API SOMME GET 


const url = require('url');

app.get("/somme",(req,res)=>{


    const params = url.parse(req.url,true).query;
    console.log(params);
    const somme = Number(params.x) + Number(params.y);
    res.send( { result: somme } );

})




// API SOMME POST


app.post('/somme',(req,res)=>{

    let body = [];

    req.on("data",(x)=>{
        body.push(x);
    }).on('end', ()=>{
        const requestBody = JSON.parse(Buffer.concat(body).toString());
        res.send( { result : requestBody.x + requestBody.y } )

    })


})









app.listen(port, () => {
  console.log(`Srever listening on port ${port}`)
})