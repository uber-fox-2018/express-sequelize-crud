const routes = require('express').Router()
const routesTeacher = require('./teachers')

routes.get('/', (req, res) => {
    res.render('homepage')
    // console.log('connect Routes');
})

module.exports = {
    routes,
    routesTeacher
}