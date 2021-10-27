const axios = require("axios").default;


const getForecast = (lat, lng) => {
    return new Promise((resolve, reject) => {  
    const url = `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`
    axios.get(url)
        .then(response => {
            let forecast = {
                temperature : response.data.currently.temperature,
                summary : response.data.daily.summary
            }
            resolve(forecast)
        }).catch(err => {
            reject(err)
        })
    })
}

module.exports = { getForecast }