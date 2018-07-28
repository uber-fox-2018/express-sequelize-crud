const routes = require('express').Router()
const students = require('./students')

routes.get('/', (req, res) => {
    res.render("index")
})

routes.use('/students', students)

module.exports = routes