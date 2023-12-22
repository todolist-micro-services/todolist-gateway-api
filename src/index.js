require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.GATEWAY_PORT || 8080
const logger = require('./logger')
const mountRoutes = require('./routes')
const mountMiddlewares = require('./middleware')

app.use(express.json())
app.use(logger)
mountMiddlewares(app)
mountRoutes(app)

app.listen(PORT, () => {
    console.log(`API Gateway listening on port ${PORT}`)
})
