const teacher = require('express').Router()
const Models = require(`../../models`)
const bodyParser = require('body-parser');
const bodyParserUrlencoded = bodyParser.urlencoded({ extended: false }) 

teacher.get('/teacher',(req, res)=> {
    Models.Teacher.findAll({})
    .then (data => {
        res.render('teacher',{
            title:`Teacher Page`,
            data:data,
            header:`Teacher Page`
        })
    })
    .catch(err => {
        res.send(err)
    })
})

teacher.get('/teacherDelete/:id',(req, res) => {
    Models.Teacher.destroy({
        where: {
            id:req.params.id
        }
    })
    .then(data => { 
        res.redirect(`/teacher`)
    })
    .catch(err => {
        console.log(err);
    })
})

teacher.get('/teacherUpdate',(req, res) => {
    res.render('teacherupdate', {
        title:`Update Teacher page`,
        header:`Update data Teacher`
    })
})

teacher.post('/teacherupdate',bodyParserUrlencoded, (req, res) => {
    Models.Teacher.update({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email
      },{
          where: {id:req.body.id}
      }).then(data => {
        res.redirect(`/teacher`)})
        .catch(err => {
            console.log(err);
        })
})

teacher.get('/teacherAdd',(req, res) => {
    res.render('teacheradd', {
        title:`Add Teacher page`,
        header:`Add data Teacher`
    })
})

teacher.post('/teacheradd',bodyParserUrlencoded, (req, res) => {
    // console.log(req.body);
    Models.Teacher.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,  
        email:req.body.email
    })
    .then(data => {
        res.redirect(`teacher`)
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = teacher