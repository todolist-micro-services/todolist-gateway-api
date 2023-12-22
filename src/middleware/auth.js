const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    console.log(authHeader)

    if (!authHeader) {
        return res
            .status(401)
            .json({ error: 'Unauthorized - Missing Bearer token' })
    }
    const token = authHeader.split(' ')[1]

    if (!token) {
        return res
            .status(401)
            .json({ error: 'Unauthorized - Malformed Bearer token' })
    }
    next()
}

module.exports = authMiddleware
