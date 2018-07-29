const routes = require('express')()
const Model = require('../models')


routes.get('/uberFoxSchool/subjects/delete', (req, res) => {
    Model.Subject.findAll()
    .then(subjects => {
        res.render('subjectDelete.ejs',{subjects})
    })
    .catch(err =>{
        res.send(err)
    })
})
routes.post('/subjects/delete/:id', (req, res) => {
    console.log(req.body)
    Model.Subject.destroy(
        {where : {id : req.body.id}}
    )
    .then(subjects => {
        res.redirect("/uberFoxSchool/subjects")
    })
    .catch(err =>{
        res.send(err)
    })
})

module.exports = routes