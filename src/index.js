const express = require('express');
const app = express();
const PORT = process.env.GATEWAY_PORT || 8080;

app.get('/project/*', (req, res) => {
    res.send('Forwarded to Project Service');
});

app.get('/user/*', (req, res) => {
    res.send('Forwarded to User Service');
});

app.listen(PORT, () => {
    console.log(`API Gateway listening on port ${PORT}`);
});
