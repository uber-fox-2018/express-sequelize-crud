const routes = require('express').Router();
const school = require('./school')

routes.use(school.student)
routes.use(school.teacher)
routes.use(school.subject)

routes.get('/', function (req, res) {
  res.render('index')
})

module.exports = routes; 