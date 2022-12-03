const { ObjectId } = require("mongodb");


const dbURL = "mongodb://localhost:27017";
const url = require("url");


exports.getProducts = function(req,res){

    // coonect database 

    const client = require("mongodb").MongoClient;


    client.connect(dbURL).then(
        (server)=>{
            const db = server.db("demoapiexpress");


            // fetch data from collection

            db.collection("products").find().toArray().then((data)=>{
                res.send(data);
            }).catch((err)=>{
                res.send({ message:"err db 2" });
            })
        }
    ).catch(
        ()=>{
            res.send({ message:"err db" })
        }
    );


}



exports.insertNewProduct = function(req,res){
    let body = [];
  req.on("data",(chunk)=>{
    body.push(chunk);
  }).on("end",()=>{

    const requestBody = JSON.parse(Buffer.concat(body).toString());


    if ( requestBody.title != null && requestBody.price != null, requestBody.quantity != null) {
      
      const document = {
        title:requestBody.title,
        price:requestBody.price,
        quantity:requestBody.quantity,
        
      }


   const client = require("mongodb").MongoClient;


    client.connect(dbURL).then(
        (server)=>{
            const db = server.db("demoapiexpress");


            // fetch data from collection

            db.collection("products").insertOne(document).then( ()=>{
                res.send({ success:true,  message:"Product inserted successfully." })
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




exports.updateProductByID = function(req,res){

    let body = [];
    req.on("data",(chunk)=>{
      body.push(chunk);
    }).on("end",()=>{
  
      const requestBody = JSON.parse(Buffer.concat(body).toString());
  
  
      if ( requestBody.title != null && requestBody.price != null && requestBody.quantity != null && requestBody.id != null) {
        
        const document = {
          title:requestBody.title,
          price:requestBody.price,
          quantity:requestBody.quantity,
          
        }
  
  
     const client = require("mongodb").MongoClient;
  
  
      client.connect(dbURL).then(
          (server)=>{
              const db = server.db("demoapiexpress");
  
  
              // fetch data from collection
  
              db.collection("products").updateOne( { _id : ObjectId(requestBody.id) } , { $set : document }  ).then( (info)=>{

                console.log(info.modifiedCount);

                res.send({ success:true,  message:"Product updated successfully." })
            } ).catch( ()=>{
                res.send({ success:false,  message:"Something went wrong." })
            } )
  
  
          }
      ).catch(
          (err)=>{
                console.log(err);
              res.send({ message:"err db" })
          }
      );
      
  
  
  
  
  
      } else {
        res.send({ success:false, message:"bad request" });
      }
  
  
  
    })
    
}






exports.deleteProductByID = function(req,res){


  
     const client = require("mongodb").MongoClient;
  
  
      client.connect(dbURL).then(
          (server)=>{
              const db = server.db("demoapiexpress");
  
  
              // fetch data from collection

              const id = url.parse(req.url,true).query.id;

              if (id != null) {
                db.collection("products").deleteOne( { _id : ObjectId(id) }  ).then( (info)=>{

                    console.log(info.modifiedCount);
    
                    res.send({ success:true,  message:"Product deleted successfully." })
                } ).catch( ()=>{
                    res.send({ success:false,  message:"Something went wrong." })
                } )
      
      
              }else{
                res.send({ success: false, message:"id is required" })
              }
  
             
          }
      ).catch(
          (err)=>{
                console.log(err);
              res.send({ message:"err db" })
          }
      );
      
  
    
}
