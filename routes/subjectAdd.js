const routes = require('express')()
const Model = require('../models')

routes.post('/subjects/add', (req, res) => {
    
    Model.Subject.create({
            subject_name: req.body.subject_name
        })
        .then(data => {
            res.redirect('/uberFoxSchool/subjects')
            
        })
        .catch(err => {
            res.redirect(res)
        })
})

routes.get('/uberFoxSchool/subjects/add', (req, res) => {
    Model.Subject.findAll()
    .then(subjects => {
        res.render('subjectForm.ejs',{subjects})
    })
    .catch(err =>{
        res.send(err)
    })
})

module.exports = routes