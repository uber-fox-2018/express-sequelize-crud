const student = require('express').Router()
const Model = require('../../models')
const bodyParser = require('body-parser')
student.use(bodyParser.json()); // for parsing application/json
student.use(bodyParser.urlencoded({
    extended: true
}));

//================================================== show student
student.get('/uberFoxSchool/students', (req, res) => {
    Model.Student.findAll()
        .then(students => {
            res.render('showAllStudent.ejs', {
                students
            })
        })
        .catch(err => {
            res.send(err)
        })
})
//==================================================== students add
student.post('/students/add', (req, res) => {
    Model.Student.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        })
        .then(data => {
            res.redirect('/uberFoxSchool/students')
            console.log(data)
        })
        .catch(err => {
            res.redirect('/students/add/failed')
        })
})
student.get('/uberFoxSchool/students/add', (req, res) => {
    Model.Student.findAll()
        .then(students => {
            res.render('studentForm.ejs', {
                students
            })
        })
        .catch(err => {
            res.send(err)
        })
})
//===================================================== students delete
student.get('/uberFoxSchool/students/delete', (req, res) => {
    Model.Student.findAll()
        .then(students => {
            res.render('studentDelete.ejs', {
                students
            })
        })
        .catch(err => {
            res.send(err)
        })
})
student.post('/students/delete/:id', (req, res) => {
    console.log(req.body)
    Model.Student.destroy({
            where: {
                id: req.body.id
            }
        })
        .then(students => {
            res.redirect("/uberFoxSchool/students")
        })
        .catch(err => {
            res.send(err)
        })
})
//==================================================== students edit
student.get('/uberFoxSchool/students/edit', (req, res) => {
    Model.Student.findAll()
        .then(students => {
            res.render('studentEdit.ejs', {
                students
            })
        })
        .catch(err => {
            res.send(err)
        })
})
student.post('/students/edit/:id', (req, res) => {

    Model.Student.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }, {
            where: {
                id: req.body.id
            }
        })
        .then(students => {

            res.redirect("/uberFoxSchool/students")
        })
        .catch(err => {
            res.send(err)
        })
})
module.exports = student