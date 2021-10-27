const express = require("express");

const app = express();

// http://localhost:9000
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(9000, ()=> console.log("Weather Server started at PORT : 9000"))