const express = require('express')
const router = express.Router()
require('../utils/forwardRequest')
const forwardRoute = require('../utils/forwardRoute')
const PROJECT_API = process.env.PROJECT_API

router.get('/*', async (req, res) => {
    await forwardRoute(req, res, PROJECT_API)
})

router.put('/*', async (req, res) => {
    await forwardRoute(req, res, PROJECT_API)
})

router.delete('/*', async (req, res) => {
    await forwardRoute(req, res, PROJECT_API)
})

router.post('/*', async (req, res) => {
    await forwardRoute(req, res, PROJECT_API)
})

module.exports = router
