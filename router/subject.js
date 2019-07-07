const routes = require('express').Router()
const { 
  add, 
  showAllSubject, 
  findSubject, 
  updateSubject,
  deleteSubject 
} = require('../controller/subject')

routes.get('/subject', showAllSubject)
routes.get('/subject/add', (req, res) => {
  res.render('form_subject',{message: null, error: null})
})
routes.post('/subject/add', add)
routes.get('/subject/edit/:id', findSubject)
routes.post('/subject/edit/:id', updateSubject)
routes.get('/subject/delete/:id', deleteSubject)
module.exports = routes