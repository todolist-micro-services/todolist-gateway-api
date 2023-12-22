const forwardRequest = require('./forwardRequest')
const forwardRoute = async (req, res, projectApi) => {
    try {
        const { method, headers, body, params, query } = req
        const destinationURL = projectApi + req.path
        const result = await forwardRequest(
            { method, headers, body, params, query },
            destinationURL
        )
        res.status(result.status).send(result.data)
    } catch (error) {
        console.error('Error handling request:', error.message)
        res.status(500).send('Internal Server Error')
    }
}

module.exports = forwardRoute
