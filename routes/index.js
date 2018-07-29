const routes = require('express').Router()
const schools = require('./school')

routes.use(schools.student)
routes.use(schools.student)

routes.get('/', (req, res) => {
    res.send('HALAMAN INI MASIH DI MAINTENANCE')
})

module.exports = routes