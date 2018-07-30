const teacher = require('express').Router()
const Model = require('../../models')
const bodyParser = require('body-parser')
teacher.use(bodyParser.json()); // for parsing application/json
teacher.use(bodyParser.urlencoded({
    extended: true
}));
// =================================================== show teacher
teacher.get('/uberFoxSchool/teachers', (req, res) => {
    Model.Teacher.findAll()
        .then(teachers => {
            res.render('showAllTeacher.ejs', {
                teachers
            })
        })
        .catch(err => {
            res.send(err)
        })
})
//  =========================================================== teachers add
teacher.post('/teachers/add', (req, res) => {
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
teacher.get('/uberFoxSchool/teachers/add', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherForm.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})
//========================================================= teachers delete
teacher.get('/uberFoxSchool/teachers/delete', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherDelete.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})
teacher.post('/teachers/delete/:id', (req, res) => {
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
//============================================= teacher edit
teacher.get('/uberFoxSchool/teachers/edit', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherEdit.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})
teacher.post('/teachers/edit/:id', (req, res) => {
    
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

module.exports = teacher
