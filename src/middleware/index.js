const authMiddleware = require('./auth')
function mountMiddlewares(app) {
    app.use(authMiddleware)
}

module.exports = mountMiddlewares
