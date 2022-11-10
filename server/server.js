function server() {
    require('dotenv').config()

    const express = require('express')
    const bodyParser = require('body-parser')

    const app = express()
    const port = process.env.PORT || 3000

    // get data from POST requests with bodyParser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    // use api routes from api folders
    const apiRoutes = require('./api')
    app.use('/api', apiRoutes)

    app.listen(port, () => console.log(`Listening on port ${port}`))
}