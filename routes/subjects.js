const routes = require('express').Router()
const Controller = require('../controller/controllers')
const ControllerSubjects = Controller.ControllerSubjects

routes.get('/add', (req, res) => {
    res.render('addSubject')
})

routes.post('/add', (req, res) => {
    let newSubject = {
        subjectName: req.body.subjectName,
    }
    ControllerSubjects.addSubject(newSubject)
    .then (msg => {
        res.redirect('/subjects')
    })
    .catch(err => {
        res.send(err)
    })
})


routes.get('/', (req, res) => {
    ControllerSubjects.showSubjects()
    .then(dataSubjects => {
        let containTeacherArr = []
        dataSubjects.forEach(dataSubject => {
            let teacherObj = {
                id: dataSubject.id,
                subjectName: dataSubject.subjectName,
            }
            containTeacherArr.push(teacherObj)
        })
        // console.log(containTeacherArr);
        res.render('subjects', {containTeacherArr})
    })
    .catch(err => {
        res.send(err.message)
    })
})

routes.get('/edit/:id', (req, res) => {
    let id =  req.params.id
    ControllerSubjects.find(id)
    .then(data => {
        res.render('editSubject', {data})
    })
    .catch(err => [
        res.send(err.message)
    ])
})

routes.post('/edit/:id', (req, res) => {
    let id =  req.params.id
    let obj = {
        subjectName: req.body.subjectName,
    }
    ControllerSubjects.editSubject(obj ,id)
    .then(msg => {
        res.redirect('/subjects')
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = routes