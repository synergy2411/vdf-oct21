const { MongoClient } = require("mongodb");

// const MONGO_URL = 'mongodb://localhost:27017'

const MONGO_CLOUD_SRV = "mongodb+srv://vdiuser:sd5VFZXeVsXFHKQs@cluster0.e9xsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

let _db;

const createTodo = () => {
    _db.collection("todos").insert({label : "grocery", statue : false}, (err, res)=>{
        if(err){
            console.log(err)
        }
        console.log("RESULT : ", res)
        findTodo()
    })
}

const findTodo = () => {
    _db.collection("todos").find().toArray((err, res) => {
        console.log("RESPONSE : ", res)
    })
}

MongoClient.connect(MONGO_CLOUD_SRV)
    .then(mongo => {
        _db = mongo.db('vdi-db')
        console.log("Mongo Cloud Connected...")
        createTodo();
        
    }).catch(err => {
        console.log(err)
        process.exit(1)
    })