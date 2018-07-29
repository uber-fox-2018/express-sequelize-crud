const routes = require('express')()
const Model = require('../models')



routes.get('/uberFoxSchool/teachers', (req, res) => {
    Model.Teacher.findAll()
        .then(teachers => {
            res.render('showAllTeacher.ejs', {
                teachers
            })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = routes

