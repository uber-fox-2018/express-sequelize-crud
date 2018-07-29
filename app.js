const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const Model = require('./models')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.render("index")
})

app.get('/student', (req, res) => {
	Model.Student
		 .findAll()
		 .then((students)=> {
		 	res.render("students/index", {students:students})
		 })
	
})

app.post('/student', (req, res) => {
	let objStudent = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		hight: req.body.hight,
		gender: req.body.gender,
		birthday: req.body.birthday,
		email: req.body.email,
		phone: req.body.phone,
	}
	Model.Student
		 .create(objStudent)
		 .then((student) => {
		 	res.redirect('/student')
		 })
})

app.get('/student/add', (req, res) => {
	res.render("students/formAdd")
})

app.listen(3000, () => {
	console.log(`Server is running`)
})
