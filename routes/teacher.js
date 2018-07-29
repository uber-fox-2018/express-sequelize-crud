const router = require('express').Router()
const Controller = require('../controllers/controller-teacher')

router.get('/',(req,res) => {
    Controller.showData()
    .then((data_teachers) => {
        res.render('teacher', {data_teachers: data_teachers})
    })
})

router.get('/add',(req,res) => {
    res.render('add-teacher.ejs')
})

router.post('/add',(req,res) => {
    Controller.createDataTeacher(req.body.first_name,req.body.last_name,req.body.email)
    .then(() => {
        res.redirect('/teachers')
    })
})

router.get('/edit/:id',(req,res) => {
    Controller.getTeacher(req.params.id)
    .then((data_teacher) => {
        res.render('edit-teacher', {data_teacher: data_teacher})
    })
})

router.post('/edit/:id', (req,res) => {
    Controller.editTeacher(req.params.id,req.body.first_name,req.body.last_name,req.body.email)
    .then(() => {
        res.redirect('/teachers')
    })
})

router.get('/delete/:id',(req,res) => {
    Controller.deleteTeacher(req.params.id)
    .then(() => {
        res.redirect('/teachers')
    })
})



module.exports = router