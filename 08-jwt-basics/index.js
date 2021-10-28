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

const ensureToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(authHeader){
        const token = authHeader.split(' ')[1];
        req.token = token;
        next();
    }else{
        return res.send({message : 'Auth Header not available'})
    }
}

app.get('/api/protected', ensureToken, (req, res) => {
    jwt.verify(req.token, MY_SECRET_KEY, (err, decode)=>{
        if(err){
            console.log(err);
            process.exit(1)
        }
        console.log("DECODE : ", decode)
        res.send({message : "Success, Accessing protected API"})
    })
})

app.listen(3030, () => console.log("Server started at PORT : 3030"))