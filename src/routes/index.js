const projectRoutes = require('./project');

function mountRoutes(app) {
    app.use('/projects', projectRoutes);
}

module.exports = mountRoutes;
