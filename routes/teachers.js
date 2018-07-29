const routes = require('express').Router()
const Controller = require('../controller/controllers')
const ControllerTeachers = Controller.ContollerTeachers

routes.get('/add', (req, res) => {
    res.render('addTeacher')
})

routes.post('/add', (req, res) => {
    let newTeacher = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }
    ControllerTeachers.addTeacher(newTeacher)
    .then (msg => {
        res.redirect('/teachers')
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/edit/:id', (req, res) => {
    let id =  req.params.id
    ControllerTeachers.find(id)
    .then(data => {
        res.render('editTeacher', {data})
    })
    .catch(err => [
        res.send(err.message)
    ])
})

routes.post('/edit/:id', (req, res) => {
    let id =  req.params.id
    let obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }
    ControllerTeachers.editTeacher(obj ,id)
    .then(msg => {
        res.redirect('/teachers')
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/delete/:id', (req, res) => {
    let id = req.params.id
    // console.log('masuk');
    ControllerTeachers.removeTeacher(id)
    .then(() => {
        // res.render('teachers', {containTeacherArr})
        res.redirect('/teachers')
    })
    .catch(err => {
        res.send(err.message)
    })
})


routes.get('/', (req, res) => {
    ControllerTeachers.showTeachers()
    .then(dataTeachers => {
        let containTeacherArr = []
        dataTeachers.forEach(dataTeacher => {
            let teacherObj = {
                id: dataTeacher.id,
                firstName: dataTeacher.firstName,
                lastName: dataTeacher.lastName,
                email: dataTeacher.email,
            }
            containTeacherArr.push(teacherObj)
        })
        // console.log(containTeacherArr);
        res.render('teachers', {containTeacherArr}) // <== INGET MASUKIN OBJ
    })
    .catch(err => {
        res.send(err.message)
    })
})

module.exports = routes