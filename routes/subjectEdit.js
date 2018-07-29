const routes = require('express')()
const Model = require('../models')


routes.get('/uberFoxSchool/subjects/edit', (req, res) => {
    Model.Subject.findAll()
    .then(subjects => {
        res.render('subjectEdit.ejs',{subjects})
    })
    .catch(err =>{
        res.send(err)
    })
})
routes.post('/subjects/edit/:id', (req, res) => {
    
    Model.Subject.update(
        {subject_name : req.body.subject_name},
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