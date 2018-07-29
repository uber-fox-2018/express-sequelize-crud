const routes = require('express')()
const Model = require('../models')

routes.get('/uberFoxSchool/students/edit', (req, res) => {
    Model.Student.findAll()
    .then(students => {
        res.render('studentEdit.ejs',{students})
    })
    .catch(err =>{
        res.send(err)
    })
})

routes.post('/students/edit/:id', (req, res) => {
    
    Model.Student.update(
        {first_name : req.body.first_name,
        last_name: req.body.last_name},
        {where : {id : req.body.id}}
    )
        .then(students => {
            
            res.redirect("/uberFoxSchool/students")
        })
        .catch(err =>{
            res.send(err)
        })
})

module.exports = routes