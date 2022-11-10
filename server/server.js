import express from 'express'
import { json, urlencoded } from 'body-parser'
import apiRoutes from './api'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// get data from POST requests with bodyParser
app.use(json())
app.use(urlencoded({ extended: true }))

// use api routes from api folders
app.use('/api', apiRoutes)

app.listen(port, () => console.log(`Listening on port ${port}`))