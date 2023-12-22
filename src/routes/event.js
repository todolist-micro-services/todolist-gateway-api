const express = require('express')
const router = express.Router()
require('../utils/forwardRequest')
const forwardRoute = require('../utils/forwardRoute')
const EVENT_API = process.env.EVENT_API

router.get('/*', async (req, res) => {
    await forwardRoute(req, res, EVENT_API)
})

router.put('/*', async (req, res) => {
    await forwardRoute(req, res, EVENT_API)
})

router.delete('/*', async (req, res) => {
    await forwardRoute(req, res, EVENT_API)
})

router.post('/*', async (req, res) => {
    await forwardRoute(req, res, EVENT_API)
})

module.exports = router
