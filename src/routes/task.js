const express = require('express')
const router = express.Router()
require('../utils/forwardRequest')
const forwardRoute = require('../utils/forwardRoute')
const TASK_API = process.env.TASK_API

router.get('/*', async (req, res) => {
    await forwardRoute(req, res, TASK_API)
})

router.put('/*', async (req, res) => {
    await forwardRoute(req, res, TASK_API)
})

router.delete('/*', async (req, res) => {
    await forwardRoute(req, res, TASK_API)
})

router.post('/*', async (req, res) => {
    await forwardRoute(req, res, TASK_API)
})

module.exports = router
