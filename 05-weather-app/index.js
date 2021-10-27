const express = require("express");
const { getForecast } = require("./utils/forecast");
const { getGeocode } = require("./utils/geocode");
const app = express();

// http://localhost:9000
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/location", (req, res) => {
    const {location} = req.query;
    getGeocode(location)
        .then(({placeName, lat, lng}) => {
            getForecast(lat, lng)
            .then(({temperature, summary}) => {
                let resp = {
                    temperature,
                    summary,
                    placeName
                }
                console.log(resp);
                return res.send(resp)
            }).catch(err => res.send(err))
        })
        .catch(err => {
            return res.send(err)
        })
})

app.listen(9000, ()=> console.log("Weather Server started at PORT : 9000"))