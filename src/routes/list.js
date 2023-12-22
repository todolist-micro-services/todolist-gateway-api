const express = require('express');
const router = express.Router();
require('../utils/forwardRequest');
const forwardRoute = require("../utils/forwardRoute");
const LIST_API = process.env.LIST_API;

router.get('/*', async (req, res) => {
    await forwardRoute(req, res, LIST_API)
});

router.put('/*', async (req, res) => {
    await forwardRoute(req, res, LIST_API)
});

router.delete('/*', async (req, res) => {
    await forwardRoute(req, res, LIST_API)
});

router.post('/*', async (req, res) => {
    await forwardRoute(req, res, LIST_API)
});

module.exports = router;
