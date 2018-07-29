const routes = require('express')()
const Model = require('../models')

routes.get('/uberFoxSchool/students',(req,res) =>{
    Model.Student.findAll()
        .then(students => {
            res.render('showAllStudent.ejs', {
                students
            })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = routes