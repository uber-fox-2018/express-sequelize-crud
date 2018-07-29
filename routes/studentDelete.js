const routes = require('express')()
const Model = require('../models')

routes.get('/uberFoxSchool/students/delete', (req, res) => {
    Model.Student.findAll()
    .then(students => {
        res.render('studentDelete.ejs',{students})
    })
    .catch(err =>{
        res.send(err)
    })
})
routes.post('/students/delete/:id', (req, res) => {
    console.log(req.body)
    Model.Student.destroy(
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