const router = require('express').Router()
const Controller = require('../controllers/controller-subject')

router.get('/', (req,res) => {
    Controller.showData()
    .then((data_subjects) => {
        res.render('subject', {data_subjects: data_subjects})
    })
    
})

router.get('/add', (req,res) => {
    res.render('add-subject')
})

router.post('/add', (req,res) => {
    Controller.addSubject(req.body.subject_name)
    .then(() => {
        res.redirect('/subjects')
    })
})

router.get('/edit/:id',(req,res) => {
    Controller.getSubject(req.params.id)
    .then((data_subjects) => {
        console.log(data_subjects);
        
        res.render('edit-subject', {data_subjects: data_subjects})
    })
})

router.post('/edit/:id', (req,res) => {
    Controller.editSubject(req.params.id,req.body.subject_name)
    .then(() => {
        res.redirect('/subjects')
    })
})

router.get('/delete/:id',(req,res) => {
    Controller.deleteSubject(req.params.id)
    .then(() => {
        res.redirect('/subjects')
    })
})

module.exports = router