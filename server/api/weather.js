require('dotenv').config({path: './../../../.env'})
const axios = require('axios')

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

class Weather {
    /**
     * Connect to the API and grab data to send back to the frontend
     *
     * @param {number} zipCode The zipcode used to get the weather info from the api
     * @param {string} tempMetric This is either "imperial" (use Fahrenheit) or "metric" (use Celsius)
     * @return {JSON} The data response from the api call
     */

    getWeatherData = async(zipCode, tempMetric) => {
        /**
         * - get api "By ZIP code" (https://openweathermap.org/current#zip)
         * - "us" query = "United States"
         * - "process.env.WEATHER_KEY" is the api key the .env file
         * - "units" query can be either imperial (Fahrenheit) or metric (Celsius)
         */

        let url = `${BASE_URL}?zip=${zipCode},us&appid=${process.env.WEATHER_API_KEY}&units=${tempMetric}`

        return(await axios.get(url)).data
    }
}

module.exports = Weather