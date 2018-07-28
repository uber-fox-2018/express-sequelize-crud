const router = require('express').Router();
const Controller = require('../controllers/controller-student')

router.get('/',(req,res) => {
    Controller.showData()
    .then((data_students) => {
        res.render('student.ejs', {data_students})
    })
})

router.get('/add',(req,res) => {
    res.render('add-student.ejs')
})

router.post('/add',(req,res) => {
    Controller.createDataStudent(req.body.first_name,req.body.last_name,req.body.email)
    .then(() => {
        res.redirect('/students')
    })
})

router.get('/delete/:id',(req,res) => {
    Controller.deleteStudent(req.params.id)
    .then(() => {
        res.redirect('/students')
    })
})

router.get('/edit/:id',(req,res) => {
    Controller.getStudent(req.params.id)
    .then((data_student) => {
        res.render('edit-student', {data_student: data_student})  
    })
})

router.post('/edit/:id', (req,res) => {
    Controller.editStudent(req.params.id,req.body.first_name,req.body.last_name,req.body.email)
    .then(() => {
        res.redirect('/students')
    })
})


module.exports = router