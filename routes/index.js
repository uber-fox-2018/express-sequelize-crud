const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.status(200).json({ connected: true })
})

module.exports = routes