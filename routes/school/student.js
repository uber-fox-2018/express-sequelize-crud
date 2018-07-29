const student = require('express').Router()
const Models = require(`../../models`)
const bodyParser = require('body-parser');
const bodyParserUrlencoded = bodyParser.urlencoded({ extended: false }) 

student.get('/student',(req, res)=> {
    Models.Student.findAll({})
    .then (data => {
        res.render('student',{
            title:`Student page`,
            data:data,
            header:`Student Table`
        })
    })
    .catch(err => {
        res.send(err)
    })
})

student.get('/studentDelete/:id',(req, res) => {
    console.log(req.params.id);
    Models.Student.destroy({
        where: {
            id:req.params.id
        }
    })
    .then(data => { 
        res.redirect(`/student`)
    })
    .catch(err => {
        console.log(err);
    })
})

student.get('/studentUpdate',(req, res) => {
    res.render('studentupdate', {
        title:`Update Student page`,
        header:`Update data Student`
    })
})

student.post('/studentupdate',bodyParserUrlencoded, (req, res) => {
    console.log(req.body);

    Models.Student.update({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday:req.body.birthday,
        gender:req.body.gender,
        email:req.body.email
      },{
          where: {id:req.body.id}
      }).then(data => {
        res.redirect(`/student`)})
        .catch(err => {
            console.log(err);
        })
})

student.get('/studentAdd',(req, res) => {
    res.render('studentadd', {
        title:`Add Student page`,
        header:`Add data Student`
    })
})

student.post('/studentadd',bodyParserUrlencoded, (req, res) => {
    Models.Student.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday:req.body.birthday,
        gender:req.body.gender,     
        email:req.body.email
    })
    .then(data => {
        res.redirect(`student`)
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = student