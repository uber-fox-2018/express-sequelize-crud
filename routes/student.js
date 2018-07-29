'use strict'
const express = require('express')
const router = express.Router()
const ControllerStudent =require('../controllers/controllerStudent')

router.get('/', (req, res) => {
    ControllerStudent.showStudent()
    .then((dataStudent) => {
        res.render('student', {dataStudent: dataStudent})
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/add', (req, res) => {
    res.render('addStudent')
})

router.post('/add', (req, res) => {
    ControllerStudent.createStudent(req.body.firstName, req.body.lastName, req.body.email)
    .then(() => {
        res.redirect('/student')
    }).catch((err) => {
        console.log(err);
    });
    
})

router.get('/edit/:id',(req,res) => {
    ControllerStudent.getStudent(req.params.id)
    .then((student) => {
        res.render('editStudent', {student: student})  
    })
})

router.post('/edit/:id', (req,res) => {
    ControllerStudent.updateStudent(req.params.id,req.body.firstName,req.body.lastName,req.body.email)
    .then(() => {
        res.redirect('/student')
    })
})

router.get('/delete/:id', (req, res) => {
    ControllerStudent.deleteStudent(req.params.id)
    .then(() => {
        res.redirect('/student')
    })
})

module.exports = router