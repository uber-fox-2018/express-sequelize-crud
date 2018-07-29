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
    res.render('addTeacher')
})

router.post('/add', (req, res) => {
    ControllerTeacher.createTeacher(req.body.firstName, req.body.lastName, req.body.email)
    .then(() => {
        res.redirect('/teacher')
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/edit/:id', (req, res) => {
    ControllerTeacher.getTeacher(req.params.id)
    .then((teacher) => {
        res.render('editTeacher', {teacher: teacher})
    }).catch((err) => {
        console.log(err);
    });
})

router.post('/edit/:id', (req, res) => {
    ControllerTeacher.updateTeacher(req.params.id, req.body.firstName, req.body.lastName, req.body.email)
    .then(() => {
        res.redirect('/teacher')
    })
})

router.get('/delete/:id', (req, res) => {
    ControllerTeacher.deleteTeacher(req.params.id)
    .then(() => {
        res.redirect('/teacher')
    })
})

module.exports = router