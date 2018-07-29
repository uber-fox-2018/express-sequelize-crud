'use strict'
const express = require('express')
const router = express.Router()
const ControllerTeacher = require('../controllers/controllerTeacher')

router.get('/', (req, res) => {
    ControllerTeacher.showTeacher()
    .then((teacher) => {
        res.render('teacher', {teacher: teacher})
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/add', (req, res) => {
    res.render('addTeacher', {message: null, err: null})
})

router.post('/add', (req, res) => {
    ControllerTeacher.createTeacher(req.body.firstName, req.body.lastName, req.body.email)
    .then(() => {
        res.render('addTeacher', {message: 'Teacher data has been saved successfully', err: null})
    }).catch((err) => {
        res.render('addTeacher', {message: null, err: err.message})
    });
})

router.get('/edit/:id', (req, res) => {
    ControllerTeacher.getTeacher(req.params.id)
    .then((teacher) => {
        res.render('editTeacher', {teacher: teacher, message: 'Are you sure to change this data?', err: null})
    }).catch((err) => {
        res.render('editTeacher', {teacher: null, message: null, err: err.message}) 
    });
})

router.post('/edit/:id', (req, res) => {
    ControllerTeacher.updateTeacher(req.params.id,req.body.firstName,req.body.lastName,req.body.email)
    .then(() => {
        ControllerTeacher.getTeacher(req.params.id)
        .then((teacher) => {
            res.render('editTeacher', {teacher: teacher, message:'Teacher data has been updated successfully', err: null})  
        })
        .catch((err) => {
            res.render('editTeacher', {teacher: null, message: null, err: err.message}) 
        })
    })
    .catch((err) => {
        ControllerTeacher.getTeacher(req.params.id)
        .then((teacher) => {
            res.render('editTeacher', {teacher: teacher, message: null, err: err.message})  
        })
    })
})

router.get('/delete/:id', (req, res) => {
    ControllerTeacher.deleteTeacher(req.params.id)
    .then(() => {
        res.redirect('/teacher')
    })
})

module.exports = router