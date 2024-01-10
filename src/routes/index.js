const authRoutes = require('./auth')
const userRoutes = require('./user')
const projectRoutes = require('./project')
const listRoutes = require('./list')
const taskRoutes = require('./task')

function mountRoutes(app) {
    app.use('/auth', authRoutes)
    app.use('/users', userRoutes)
    app.use('/projects', projectRoutes)
    app.use('/lists', listRoutes)
    app.use('/tasks', taskRoutes)
}

module.exports = mountRoutes
