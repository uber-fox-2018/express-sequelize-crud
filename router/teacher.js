const routes = require('express').Router()
const { 
  add, 
  showDataTeacher, 
  findTeacher,
  updateTeacher, 
  deleteTeacher 
} = require('../controller/teacher')

routes.get('/teacher/add', (req, res) => {
  res.render('form_teacher', {message: null, error: null})
})

routes.post('/teacher/add', add)
routes.get('/teacher', showDataTeacher)
routes.get('/teacher/edit/:id', findTeacher)
routes.post('/teacher/edit/:id', updateTeacher)
routes.get('/teacher/delete/:id', deleteTeacher)

module.exports = routes