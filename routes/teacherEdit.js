const routes = require('express')()
const Model = require('../models')


routes.get('/uberFoxSchool/teachers/edit', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherEdit.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})
routes.post('/teachers/edit/:id', (req, res) => {
    
    Model.Teacher.update(
        {first_name : req.body.first_name,
        last_name: req.body.last_name,
        email : req.body.email},
        {where : {id : req.body.id}}
    )
        .then(teachers => {
            
            res.redirect("/uberFoxSchool/teachers")
        })
        .catch(err =>{
            res.send(err)
        })
})

module.exports = routes