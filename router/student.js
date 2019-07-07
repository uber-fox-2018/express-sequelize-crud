const routes = require('express').Router()
const { 
  add, 
  showAllData, 
  findStudent,
  updateStudent, 
  deleteStudent 
} = require('../controller/student')

routes.get('/student/add', (req, res) => {
  res.render('form_student', {message: null, error: null})
})

routes.post('/student/add', add)
routes.get('/student', showAllData)
routes.get('/student/edit/:id', findStudent)
routes.post('/student/edit/:id', updateStudent)
routes.get('/student/delete/:id', deleteStudent)

module.exports = routes