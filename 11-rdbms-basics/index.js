const express = require('express');
const PostModel = require('./model/post.model');
require('./db');
const app = express();
app.use(express.json());

app.get("/api/posts", (req, res) => {
    PostModel.findAll()
        .then(posts => res.send(posts))
        .catch(err => res.send(err))
})

app.post("/api/posts", (req, res) => {
    PostModel.create(req.body)
        .then(response => res.send(response))
        .catch(err=>console.log(err))
})

app.listen(8888, () => console.log("Server Started at PORT : 8888"))