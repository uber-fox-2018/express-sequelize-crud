const student = require('express').Router()
const Model   = require('../../models')
const bodyParser = require('body-parser')
let urlEncodedParser  = bodyParser.urlencoded({extended:false})

/* START READ DATA STDUNET */
student.get('/students', (req,res) => {
    Model.Student.findAll({
        raw:true
    })
    .then( element => {
        res.render('student.ejs', { dataStudent : (element)})
    })
})
/* END READ DATA STDUNET */


/* START UPDATE DATA STDUNET */
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
/* START EDIT DATA STDUNET */


/* START ADD DATA STDUNET */
student.get('/addStudents', (req,res) => {
    res.render('addStudent.ejs')
})

student.post('/addStudents', urlEncodedParser, (req,res) => {
    let dataStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }
   Model.Student.create(dataStudent)
})
/* END ADD DATA STDUNET */


/* START DELETE STUDENT */
student.get('/deleteStudent/:id', (req,res) => {
    console.log(req.params.id)
    Model.Student.destroy({
        raw:true,
        where : {id: req.params.id}
    })
    res.redirect('/students')
})
/* END DELETE STUDENT */

module.exports = student