const express = require('express')
const router = express.Router()
require('../utils/forwardRequest')
const forwardRoute = require('../utils/forwardRoute')
const AUTHENTIFICATION_API = process.env.AUTHENTIFICATION_API

router.get('/*', async (req, res) => {
    await forwardRoute(req, res, AUTHENTIFICATION_API)
})

router.put('/*', async (req, res) => {
    await forwardRoute(req, res, AUTHENTIFICATION_API)
})

router.delete('/*', async (req, res) => {
    await forwardRoute(req, res, AUTHENTIFICATION_API)
})

router.post('/*', async (req, res) => {
    await forwardRoute(req, res, AUTHENTIFICATION_API)
})

module.exports = router
