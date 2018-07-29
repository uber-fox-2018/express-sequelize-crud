const routes = require('express').Router()
const Controller = require('../controller/controllers')
const ControllerStudents = Controller.ControllerStudents

routes.get('/add', (req, res) => {
    res.render('addStudent')
})

routes.post('/add', (req, res) => {
    let newStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }
    ControllerStudents.addStudent(newStudent)
    .then (msg => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/edit/:id', (req, res) => {
    let id =  req.params.id
    ControllerStudents.find(id)
    .then(data => {
        console.log(data);
        
        res.render('editStudent', {data})
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
    ControllerStudents.editStudent(obj ,id)
    .then(msg => {
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/delete/:id', (req, res) => {
    let id = req.params.id
    // console.log('masuk');
    ControllerStudents.removeStudent(id)
    .then(() => {
        // res.render('Students', {containTeacherArr})
        res.redirect('/students')
    })
    .catch(err => {
        res.send(err.message)
    })
})

routes.get('/', (req, res) => {
    ControllerStudents.showStudents()
    .then(dataStudents => {
        let containTeacherArr = []
        dataStudents.forEach(dataStudent => {
            let teacherObj = {
                id: dataStudent.id,
                firstName: dataStudent.firstName,
                lastName: dataStudent.lastName,
                email: dataStudent.email,
            }
            containTeacherArr.push(teacherObj)
        })
        // console.log(containTeacherArr);
        res.render('students', {containTeacherArr})
    })
    .catch(err => {
        res.send(err.message)
    })
})

module.exports = routes