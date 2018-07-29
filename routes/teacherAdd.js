const routes = require('express')()
const Model = require('../models')

routes.post('/teachers/add', (req, res) => {
    
    Model.Teacher.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
        .then(data => {
            res.redirect('/uberFoxSchool/teachers')
            console.log(data)
        })
        .catch(err => {
            res.redirect(res)
        })
})

routes.get('/uberFoxSchool/teachers/add', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherForm.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})

module.exports = routes