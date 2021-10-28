const express = require("express");
const exphbs = require('express-handlebars');

const app = express();
const posts = [{
    author : "john doe",
    image : "https://picsum.photos/id/10/367/267",
    comments : [
        "I like it",
        "Does not seems great"
    ]
},{
    author : "jenny doe",
    image : "https://picsum.photos/id/100/367/267",
    comments : []
},{
    author : "james doe",
    image : "https://picsum.photos/id/1003/367/267",
    comments : []
}]

app.set("view engine", "hbs")

app.engine("hbs", exphbs({
    extname : '.hbs',
    layoutsDir : __dirname+'/views/layouts',
    partialsDir : __dirname+'/views/partials'
}))

app.get("/view-engines", (req, res) => {
    res.render("main",{
        layout : 'index',
        posts
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        layout : 'index'
    })
})

app.listen(9090, () => console.log("View enginer server started at PORT : 9090"))