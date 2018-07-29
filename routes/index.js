const routes = require('express').Router()
const schools = require('./school')

routes.use(schools.student)
routes.use(schools.teacher)
routes.use(schools.subject)

routes.get('/', (req, res) => {
    res.send('HALAMAN INI MASIH DI MAINTENANCE')
    // res.render('index.ejs')
})

module.exports = routes