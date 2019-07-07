const routes = require('express').Router();
const Model = require('../models')
var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({extended:false})

routes.post('/students',urlencodeParser, function(req,res){
    let id = req.body.delete
    Model.Student.destroy({
                where:{ id: id}
                });
    res.redirect('/students')
})

module.exports = routes