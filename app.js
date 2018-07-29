const express = require('express')
const app = express()
const Model = require('../express-sequelize-crud/models')
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname+ '/views'))
app.set('view engine','ejs')


app.get('/uberfoxSchool',(req,res) =>{
    res.render('home.ejs')
})

app.get('/uberFoxSchool/teachers', (req, res) => {
    Model.Teacher.findAll()
        .then(teachers => {
            res.render('showAllTeacher.ejs', {
                teachers
            })
        })
        .catch(err => {
            res.send(err)
        })
})
app.get('/uberFoxSchool/students',(req,res) =>{
    Model.Student.findAll()
        .then(students => {
            res.render('showAllStudent.ejs', {
                students
            })
        })
        .catch(err => {
            res.send(err)
        })
})
//create handle
app.post('/students/add', (req, res) => {
    
    Model.Student.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        })
        .then(data => {
            res.redirect('/uberFoxSchool/students')
            console.log(data)
        })
        .catch(err => {
            res.redirect('/students/add/failed')
        })
})

app.get('/uberFoxSchool/students/add', (req, res) => {
    Model.Student.findAll()
    .then(students => {
        res.render('studentForm.ejs',{students})
    })
    .catch(err =>{
        res.send(err)
    })
})

app.post('/teachers/add', (req, res) => {
    
    Model.Teacher.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
        .then(data => {
            res.redirect('/uberFoxSchool/teachers')
            console.log(data)
        })
        .catch(err => {
            res.redirect(res)
        })
})

app.get('/uberFoxSchool/teachers/add', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherForm.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})

//update handle
app.get('/uberFoxSchool/students/edit', (req, res) => {
    Model.Student.findAll()
    .then(students => {
        res.render('studentEdit.ejs',{students})
    })
    .catch(err =>{
        res.send(err)
    })
})

app.post('/students/edit/:id', (req, res) => {
    
    Model.Student.update(
        {first_name : req.body.first_name,
        last_name: req.body.last_name},
        {where : {id : req.body.id}}
    )
        .then(students => {
            
            res.redirect("/uberFoxSchool/students")
        })
        .catch(err =>{
            res.send(err)
        })
})

app.get('/uberFoxSchool/teachers/edit', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherEdit.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})
app.post('/teachers/edit/:id', (req, res) => {
    
    Model.Teacher.update(
        {first_name : req.body.first_name,
        last_name: req.body.last_name,
        email : req.body.email},
        {where : {id : req.body.id}}
    )
        .then(teachers => {
            
            res.redirect("/uberFoxSchool/teachers")
        })
        .catch(err =>{
            res.send(err)
        })
})
//delete handle
app.get('/uberFoxSchool/students/delete', (req, res) => {
    Model.Student.findAll()
    .then(students => {
        res.render('studentDelete.ejs',{students})
    })
    .catch(err =>{
        res.send(err)
    })
})
app.post('/students/delete/:id', (req, res) => {
    console.log(req.body)
    Model.Student.destroy(
        {where : {id : req.body.id}}
    )
    .then(students => {
        res.redirect("/uberFoxSchool/students")
    })
    .catch(err =>{
        res.send(err)
    })
})

app.get('/uberFoxSchool/teachers/delete', (req, res) => {
    Model.Teacher.findAll()
    .then(teachers => {
        res.render('teacherDelete.ejs',{teachers})
    })
    .catch(err =>{
        res.send(err)
    })
})
app.post('/teachers/delete/:id', (req, res) => {
    console.log(req.body)
    Model.Teacher.destroy(
        {where : {id : req.body.id}}
    )
    .then(teachers => {
        res.redirect("/uberFoxSchool/teachers")
    })
    .catch(err =>{
        res.send(err)
    })
})


app.listen(3006, () => {
    console.log('listening on port 3006')
})