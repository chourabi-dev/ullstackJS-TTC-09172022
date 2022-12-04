const { ObjectId } = require("mongodb");


const dbURL = "mongodb://127.0.0.1:27017";
const url = require("url");
var jwt = require('jsonwebtoken');

exports.createAccount = function(req,res){
    let body = [];
    req.on("data",(chunk)=>{
      body.push(chunk);
    }).on("end",()=>{
  
      const requestBody = JSON.parse(Buffer.concat(body).toString());
  
  
      if ( requestBody.fullname != null && requestBody.username != null, requestBody.password != null) {
        
        const document = {
          fullname:requestBody.fullname,
          username:requestBody.username,
          password:requestBody.password,
          
        }
  
  
     const client = require("mongodb").MongoClient;
  
  
      client.connect(dbURL).then(
          (server)=>{
              const db = server.db("demoapiexpress");
  
  
              // fetch data from collection
  
              db.collection("users").insertOne(document).then( ()=>{
                  res.send({ success:true,  message:"Account created successfully." })
              } ).catch( ()=>{
                  res.send({ success:false,  message:"Something went wrong." })
              } )
  
  
          }
      ).catch(
          ()=>{
              res.send({ message:"err db" })
          }
      );
      
  
      } else {
        res.send({ success:false, message:"bad request" });
      }
  
  
  
    })
    

}

exports.auth = function(req,res){



    let body = [];
    req.on("data",(chunk)=>{
      body.push(chunk);
    }).on("end",()=>{
  
      const requestBody = JSON.parse(Buffer.concat(body).toString());
  
  
      if ( requestBody.username != null, requestBody.password != null) {
        
        const user = {
        
          username:requestBody.username,
          password:requestBody.password,
          
        }
  
  
     const client = require("mongodb").MongoClient;
  
  
      client.connect(dbURL).then(
          (server)=>{
              const db = server.db("demoapiexpress");
  
  
              // fetch data from collection
  
              db.collection("users").find( user ).toArray().then( (users)=>{

                if (users.length == 1) {
                    // create token !!

                    var token = jwt.sign({ username: user.username }, 'azertyuytrezazertyuytr14521545145');

                    res.send( { success:true, token: token } )

                }else{
                    res.send({ success:false,  message:"wrong username or password" })
                }

                 
              } ).catch( ()=>{
                  res.send({ success:false,  message:"Something went wrong." })
              } )
  
  
          }
      ).catch(
          ()=>{
              res.send({ message:"err db" })
          }
      );
      
  
      } else {
        res.send({ success:false, message:"bad request" });
      }
  
  
  
    })


}
