const dbURL = "mongodb://localhost:27017";


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


