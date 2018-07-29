const routes = require('express')()
const Model = require('../models')


routes.post('/students/add', (req, res) => {
    
    Model.Student.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        })
        .then(data => {
            res.redirect('/uberFoxSchool/students')
            console.log(data)
        })
        .catch(err => {
            res.redirect('/students/add/failed')
        })
})

routes.get('/uberFoxSchool/students/add', (req, res) => {
    Model.Student.findAll()
    .then(students => {
        res.render('studentForm.ejs',{students})
    })
    .catch(err =>{
        res.send(err)
    })
})

module.exports = routes