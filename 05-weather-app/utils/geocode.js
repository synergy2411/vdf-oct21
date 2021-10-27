const axios = require("axios").default;



const getGeocode = (location) => {
    const promise = new Promise((resolve, reject) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`
    axios.get(url)
        .then(response => {
            const placeName = response.data.features[0].place_name;
            const [ lat, lng ] = response.data.features[0].geometry.coordinates;
            resolve({ placeName, lat, lng })
        }).catch(err => reject(err))
    })
    return promise;
}

// getGeocode("delhi")

module.exports = { getGeocode }