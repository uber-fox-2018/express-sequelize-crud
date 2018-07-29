const subject = require('express').Router()
const Model = require('../../models')
const bodyParser = require('body-parser')
subject.use(bodyParser.json()); // for parsing application/json
subject.use(bodyParser.urlencoded({
    extended: true
}));
//============================= show subject
subject.get('/uberFoxSchool/subjects',(req,res) =>{
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
//================================ subject add
subject.post('/subjects/add', (req, res) => {    
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
subject.get('/uberFoxSchool/subjects/add', (req, res) => {
    Model.Subject.findAll()
    .then(subjects => {
        res.render('subjectForm.ejs',{subjects})
    })
    .catch(err =>{
        res.send(err)
    })
})
//==================================== subject delete
subject.get('/uberFoxSchool/subjects/delete', (req, res) => {
    Model.Subject.findAll()
    .then(subjects => {
        res.render('subjectDelete.ejs',{subjects})
    })
    .catch(err =>{
        res.send(err)
    })
})
subject.post('/subjects/delete/:id', (req, res) => {
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
//====================================== subject edit
subject.get('/uberFoxSchool/subjects/edit', (req, res) => {
    Model.Subject.findAll()
    .then(subjects => {
        res.render('subjectEdit.ejs',{subjects})
    })
    .catch(err =>{
        res.send(err)
    })
})
subject.post('/subjects/edit/:id', (req, res) => {
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

module.exports = subject