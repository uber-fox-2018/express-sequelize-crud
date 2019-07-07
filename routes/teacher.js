const routes = require('express').Router();
const Model = require('../models')

routes.get('/teachers', function(req, res) {
    Model.Teacher.findAll()
    .then(teachers =>{
        res.send(teachers)
    })
});
module.exports = routes