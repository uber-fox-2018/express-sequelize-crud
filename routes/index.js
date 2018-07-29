const routes = require('express').Router();
const teacher = require('./teacher')
const student = require('./studentAll')
const studentAdd = require('./studentAdd')

routes.get('/', function(req, res) {
    res.render('index');
});

routes.get('/teachers', teacher)
routes.get('/students', student)
routes.post('/students', student)
routes.get('/students/add',studentAdd)
routes.post('/students/add',studentAdd)


module.exports = routes