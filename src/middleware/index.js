const authMiddleware = require('./auth')
function mountMiddlewares(app) {
    app.use('/users', authMiddleware)
    app.use('/projects', authMiddleware)
    app.use('/events', authMiddleware)
    app.use('/lists', authMiddleware)
    app.use('/tasks', authMiddleware)
}

module.exports = mountMiddlewares
