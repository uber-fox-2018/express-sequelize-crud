const student = require('express').Router()
const Model   = require('../../models')
const bodyParser = require('body-parser')
let urlEncodedParser  = bodyParser.urlencoded({extended:false})

/*
    START READ DATA STDUNET
*/

student.get('/students', (req,res) => {
    Model.Student.findAll({
        raw:true
    })
    .then( element => {
        res.render('student.ejs', { dataStudent : (element)})
    })
})

student.post('/editSt', urlEncodedParser, (req,res) => {
    let editDataStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Model.Student.update(editDataStudent, {where : {id : req.body.id}})
    .then(()=>{
        res.redirect('/students')
    })
})

student.get('/editStudent/:id', (req,res) => {

    Model.Student.findOne({
        raw:true,
        where : {id: req.params.id}
    })
    .then(data => {
        res.render('editStudent.ejs', { x : (data)})
    })
})

/*
    END READ DATA STDUNET
*/


/*
    START ADD DATA STDUNET
*/

student.get('/addstudents', (req,res) => {
    res.render('addstudent.ejs')
})

student.post('/addstudents', urlEncodedParser, (req,res) => {
    let dataStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }
   Model.Student.create(dataStudent)
})

/*
    END ADD DATA STDUNET
*/


/*
    START DELETE STUDENT
*/

student.get('/deleteStudent/:id', (req,res) => {
    console.log(req.params.id)
    Model.Student.destroy({
        raw:true,
        where : {id: req.params.id}
    })
    res.redirect('/students')
})

module.exports = student