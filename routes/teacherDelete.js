const routes = require('express')()
const Model = require('../models')

routes.get('/uberFoxSchool/teachers/delete', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherDelete.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})
routes.post('/teachers/delete/:id', (req, res) => {
    console.log(req.body)
    Model.Teacher.destroy(
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