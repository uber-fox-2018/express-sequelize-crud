const students = require('express').Router()
const listStudent = require('./all')
const addStudentForm = require('./add')
const addStudent = require('./add_post')
const editStudentForm = require('./edit')
const editStudent = require('./edit_post')
const deleteStudentForm = require('./delete')
const deleteStudent = require('./delete_post')

students.get('/', listStudent)
students.get('/add', addStudentForm)
students.post('/add', addStudent)
students.get('/edit/:studentId', editStudentForm)
students.post('/edit/:studentId', editStudent)
students.get('/delete/:studentId', deleteStudentForm)
students.post('/delete/:studentId', deleteStudent)

module.exports = students