require('dotenv').config({path: './../../../.env'})
const axios = require('axios')
const WEATHER = require('../models/Weather')

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

class Weather {
    /**
     * Saves weather data using the zipcode
     * If already existing, replace, if not, add
     *
     * @param {number} zipCode The zipcode used to get the weather info from the api
     * @param {string} tempMetric This is either "imperial" (use Fahrenheit) or "metric" (use Celsius)
     * @return {JSON} The data response from the api call
     */
     saveWeatherDataToDatabase = async(zipCode, data) => {
        const filter = { zip: zipCode }
        const replace = {
            ...filter,
            ...data,
            data: Date.now()
        }
        await this.findOneReplace(filter, replace)
    }

    // Save data to database
    getWeatherData = async(zipCode) => {
        return WEATHER.findOne({ zip: zipCode })
    }

    // If document already exists with filter, replace, if not, add a new document
    async findOneReplace(filter, replace) {
        await WEATHER.findOneAndReplace(filter, replace, { new: true, upsert: true })
    }
}

module.exports = Weather