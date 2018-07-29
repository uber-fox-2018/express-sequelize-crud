const routes = require('express').Router();
const Model = require('../models')
var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({extended:false})

routes.get('/students/add',function(req,res){ 
    res.render('studentAdd')
})

routes.post('/students/add',urlencodeParser ,function(req,res){
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date,
        updatedAt: new Date
    }
    Model.Student.create(data)
    
    res.redirect('/students')
})


module.exports = routes