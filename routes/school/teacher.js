const teacher = require('express').Router()
const Model   = require('../../models')
const bodyParser = require('body-parser')
let urlEncodedParser  = bodyParser.urlencoded({extended:false})

/* START READ DATA STDUNET */
teacher.get('/teachers', (req,res) => {
    Model.Teacher.findAll({
        raw:true
    })
    .then( element => {
        res.render('teacher.ejs', { dataTeacher : (element)})
    })
})
/* END READ DATA STDUNET */

/* START UPDATE DATA STDUNET */
teacher.post('/editTc', urlEncodedParser, (req,res) => {
    let editDataStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Model.Teacher.update(editDataStudent, {where : {id : req.body.id}})
    .then(()=>{
        res.redirect('/teachers')
    })
})

teacher.get('/editTeacher/:id', (req,res) => {

    Model.Teacher.findOne({
        raw:true,
        where : {id: req.params.id}
    })
    .then(data => {
        res.render('editTeacher.ejs', { x : (data)})
    })
})
/* START EDIT DATA STDUNET */


/* START ADD DATA STDUNET */
teacher.get('/addTeachers', (req,res) => {
    res.render('addTeacher.ejs')
})

teacher.post('/addTeachers', urlEncodedParser, (req,res) => {
    let addTeacher = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }
   Model.Teacher.create(addTeacher)
   res.redirect('/addTeachers')
})
/* END ADD DATA STDUNET */


/* START DELETE STUDENT */
teacher.get('/deleteTeacher/:id', (req,res) => {
    // console.log(req.params.id)
    Model.Teacher.destroy({
        raw:true,
        where : {id: req.params.id}
    })
    res.redirect('/teachers')
})
/* END DELETE STUDENT */

module.exports = teacher