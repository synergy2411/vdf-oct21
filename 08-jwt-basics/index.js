const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const MY_SECRET_KEY = 'MySuperSecretKey';

app.use(express.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Verify the user from Database
    if(username && password){
        const token = jwt.sign({username, password}, MY_SECRET_KEY)
        return res.send({token})
    }else{
        return res.send({message : "Username and/or Password not found"})
    }
})

app.get('/api/protected', (req, res, next)=>{
    console.log("Middleware works")
    return res.send({message : "Stuck in middleware"})
    next()
}, (req, res) => {
    res.send({message : "Success, Accessing protected API"})
})

app.listen(3030, () => console.log("Server started at PORT : 3030"))