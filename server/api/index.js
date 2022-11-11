// use express's router to route all API endpoints
const express = require('express')
const router = express.Router()

// use Weather class to call and get weather data from api
const Weather = require('./weather')

/**
 * Handles which type of traffic goes where depending on
 * the type of endpoint is called
 */

// GET request, get weather data statically
router.get('/weather', async(request, response) => {
    let weather = new Weather()

    // static data
    let weatherData = await weather.getWeatherData(11703, 'us')

    // content sent as JSON response
    response.header('Content-Type', 'application/json')
    response.send(JSON.stringify(weatherData, null, 4))
})

// POST request, get weather data dynamically
router.post('/weather', async(request, response) => {
    const { zipCode, tempMetric } = request.body
    let weather = new Weather()

    // dynamic data
    let weatherData = await weather.getWeatherData(zipCode, tempMetric)
    
    response.header('Content-Type', 'application/json')
    response.send(JSON.stringify(weatherData, null, 4))
})

module.exports = router