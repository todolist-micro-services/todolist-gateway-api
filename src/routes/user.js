const express = require('express');
const router = express.Router();
require('../utils/forwardRequest');
const forwardRoute = require("../utils/forwardRoute");
const USER_API = process.env.USER_API;

router.get('/*', async (req, res) => {
    await forwardRoute(req, res, USER_API)
});

router.put('/*', async (req, res) => {
    await forwardRoute(req, res, USER_API)
});

router.delete('/*', async (req, res) => {
    await forwardRoute(req, res, USER_API)
});

router.post('/*', async (req, res) => {
    await forwardRoute(req, res, USER_API)
});

module.exports = router;
