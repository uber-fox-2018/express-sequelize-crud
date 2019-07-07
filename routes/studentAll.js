const routes = require('express').Router();
const Model = require('../models')
var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({extended:false})

routes.get('/students', function(req, res) {
    Model.Student.findAll({})
    .then(students =>{
        res.render('studentsData',{fileStudents:students})
    })
    
});
routes.post('/students',urlencodeParser, function(req,res){
    
    let id = req.body.delete
    Model.Student.destroy({
                where:{ id: id}
                });
    res.redirect('/students')
})

module.exports = routes