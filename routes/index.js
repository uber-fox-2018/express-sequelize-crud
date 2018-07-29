const routes = require('express')()
const Model = require('../models')
const showAllTeachers = require('./showTeachers')
const showAllStudents = require('./showStudents')
const showAllSubjects = require('./showSubjects')
const studentAdd = require('./studentAdd')
const teacherAdd = require('./teacherAdd')
const subjectAdd = require('./subjectAdd')
const studentEdit = require('./studentEdit')
const teacherEdit = require('./teacherEdit')
const subjectEdit = require('./subjectEdit')
const studentDelete = require('./studentDelete')
const teacherDelete = require('./teacherDelete')
const subjectDelete = require('./subjectDelete')

routes.get('/uberFoxSchool',(req,res) =>{
    res.render('home.ejs')
})

routes.get('/uberFoxSchool/teachers',showAllTeachers)
routes.get('/uberFoxSchool/students',showAllStudents)
routes.get('/uberFoxSchool/subjects',showAllSubjects)

//create handle
routes.get('/uberFoxSchool/students/add',studentAdd)
routes.post('/students/add',studentAdd)

routes.get('/uberFoxSchool/teachers/add',teacherAdd)
routes.post('/teachers/add',teacherAdd)

routes.get('/uberFoxSchool/subjects/add',subjectAdd)
routes.post('/subjects/add',subjectAdd)
//update handle
routes.get('/uberFoxSchool/students/edit',studentEdit)
routes.post('/students/edit/:id',studentEdit)

routes.get('/uberFoxSchool/teachers/edit',teacherEdit)
routes.post('/teachers/edit/:id',teacherEdit)

routes.get('/uberFoxSchool/subjects/edit',subjectEdit)
routes.post('/subjects/edit/:id',subjectEdit)

//delete handle
routes.get('/uberFoxSchool/students/delete',studentDelete)
routes.post('/students/delete/:id',studentDelete)

routes.get('/uberFoxSchool/teachers/delete',teacherDelete)
routes.post('/teachers/delete/:id',teacherDelete)

routes.get('/uberFoxSchool/subjects/delete',subjectDelete)
routes.post('/subjects/delete/:id',subjectDelete)

module.exports = routes