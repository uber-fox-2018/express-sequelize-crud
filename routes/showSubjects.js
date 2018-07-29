const routes = require('express')()
const Model = require('../models')

routes.get('/uberFoxSchool/subjects',(req,res) =>{
    Model.Subject.findAll()
        .then(subjects => {
            res.render('showAllSubject.ejs', {
                subjects
            })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = routes