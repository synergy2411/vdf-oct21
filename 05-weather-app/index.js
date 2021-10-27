const express = require("express");
const { getGeocode } = require("./utils/geocode");
const app = express();

// http://localhost:9000
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/location", (req, res) => {
    const {location} = req.query;
    getGeocode(location)
        .then(response => {
            return res.send(response)
            // make Call to Dark sky server
        })
        .catch(err => {
            return res.send(err)
        })
})

app.listen(9000, ()=> console.log("Weather Server started at PORT : 9000"))