require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

// get data from POST requests with bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// use api routes from api folders
const apiRoutes = require('./api')
app.use('/api', apiRoutes)

// connect to MongoDB
mongoose.connect(process.env.MONGO_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected!')).catch(error => console.log(error))

app.listen(port, () => console.log(`Listening on port ${port}, up and running!`))