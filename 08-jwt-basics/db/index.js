const { connect } = require('mongoose')

const MONGO_CLOUD_SRV = "mongodb+srv://vdiuser:sd5VFZXeVsXFHKQs@cluster0.e9xsq.mongodb.net/vdi-db?retryWrites=true&w=majority"

connect(MONGO_CLOUD_SRV)
    .then(mongo => {
        console.log("Mongoose Connected...")
    })
    .catch(err => {
        console.log(err);
        process.exit(1)
    })