const { MongoClient } = require("mongodb");

// const MONGO_URL = 'mongodb://localhost:27017'

const MONGO_CLOUD_SRV = "mongodb+srv://vdiuser:sd5VFZXeVsXFHKQs@cluster0.e9xsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

let _db;

const createTodo = () => {
    _db.collection("todos").insert({label : "grocery", status : false}, (err, res)=>{
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

const deleteTodo = () => {
    _db.collection("todos").deleteOne({label : 'shopping'}, (err, result) => {
        console.log("DELETE : ", result)
        findTodo()
    })
}

const updateTodo = () => {
    _db.collection("todos").updateOne({label : 'grocery'}, {$set : { status : true}}, (err, result)=>{
        console.log("UPDATE : ", result)
        findTodo();
    })
}

MongoClient.connect(MONGO_CLOUD_SRV)
    .then(mongo => {
        _db = mongo.db('vdi-db')
        console.log("Mongo Cloud Connected...")
        // createTodo();
        // deleteTodo()
        updateTodo()
    }).catch(err => {
        console.log(err)
        process.exit(1)
    })