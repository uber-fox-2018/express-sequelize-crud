const express = require('express')
const app = express()
var router = express.Router()
const model= require("./../models")


router.get("/",function(req,res) {
	res.render("mainPage")
})

//==============STUDENTS====================================
router.get("/students",function(req,res) {
	model.Student.findAll({raw:true}).then(dataStudents => {
		res.render("students",{data:dataStudents})
	})
})

router.get("/students/addStudent",function(req,res) {
	res.render("addStudent")
})

router.post("/students/addStudent",function(req,res) {
	
	model.Student.create(req.body).then(dataStudent => {
		res.redirect("/students/addStudent")
	})
})

router.get("/students/editStudent/:id",function(req,res) {
	model.Student.findById(req.params.id,{raw:true}).then(student => {
		res.render("editStudent",{student:student})
	})
	
})

router.post("/students/editStudent/:id",function(req,res) {
	model.Student.update(req.body, {where: {id:req.params.id}}).then(
		res.redirect("/students")
		)
})

router.get("/students/:id",function(req,res){
	model.Student.destroy({
		where: {	
			id:req.params.id
		}
	}).then(res.redirect("/students"))
})
    

//===================TEACHERS===============================================

router.get("/teachers",function(req,res) {
	model.Teacher.findAll({raw:true}).then(dataTeachers => {
		res.render("teachers",{dataTeachers:dataTeachers})
	}).catch(console.log("error"))
})

router.get("/teachers/addTeacher",function(req,res) {
	res.render("addTeacher")
})

router.post("/teachers/addTeacher",function(req,res){
	model.Teacher.create(req.body).then(res.redirect("/teachers/addTeacher"))
})

router.get("/teachers/editTeacher/:id",function(req,res) {
	model.Teacher.findById(req.params.id,{raw:true}).then(dataTeacher=>{
		res.render("editTeacher",{dataTeacher:dataTeacher})
	})
})

router.post("/teachers/editTeacher/:id",function(req,res) {
	model.Teacher.update(req.body,{
		where:{
				id:req.params.id 
		}
	}).then(res.redirect("/teachers"))
})

router.get("/teachers/:id",function(req,res){
	model.Teacher.destroy({
		where: {
			id:req.params.id
		}
	}).then(res.redirect("/teachers"))
})


//=========================SUBJECT======================================
router.get("/subjects",function(req,res) {
	model.Subject.findAll({raw:true}).then(dataSubjects => {
		res.render("subjects",{dataSubjects:dataSubjects})	
	})
	
})

router.get("/subjects/addSubject",function(req,res) {
	res.render("addSubject")
})

router.post("/subjects/addSubject",function(req,res) {
	model.Subject.create(req.body).then(res.redirect("/subjects/addSubject"))
})

router.get("/subjects/editSubject/:id",function(req,res) {
	model.Subject.findById(req.params.id,{raw:true}).then(dataSubject =>{
		res.render("editSubject",{dataSubject:dataSubject})
	})
})

router.post("/subjects/editSubject/:id",function(req,res) {
	model.Subject.update(req.body, {
		where: {
			id:req.params.id
		}
	}).then(res.redirect("/subjects"))
})

router.get("/subjects/:id",function(req,res) {
	model.Subject.destroy({
		where:{
			id:req.params.id
		}
	}).then(res.redirect("/subjects"))
})







module.exports = router
