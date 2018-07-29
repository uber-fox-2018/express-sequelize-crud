const routes = require('express').Router()
const routesTeacher = require('./teachers')
const routesStudent = require('./students')

routes.get('/', (req, res) => {
    res.render('homepage')
    // console.log('connect Routes');
})

module.exports = {
    routes,
    routesTeacher,
    routesStudent
}