const subject = require('express').Router()
const Models = require(`../../models`)
const bodyParser = require('body-parser');
const bodyParserUrlencoded = bodyParser.urlencoded({ extended: false }) 

subject.get('/subject',(req, res)=> {
    Models.Subject.findAll({})
    .then (data => {
        res.render('subject',{
            title:`Subject Page`,
            data:data,
            header:`Subject Page`
        })
    })
    .catch(err => {
        res.send(err)
    })
})

subject.get('/subjectDelete/:id',(req, res) => {
    Models.Subject.destroy({
        where: {
            id:req.params.id
        }
    })
    .then(data => { 
        res.redirect(`/subject`)
    })
    .catch(err => {
        console.log(err);
    })
})

subject.get('/subjectUpdate',(req, res) => {
    res.render('subjectupdate', {
        title:`Update Subject page`,
        header:`Update data Subject`
    })
})

subject.post('/subjectupdate',bodyParserUrlencoded, (req, res) => {
    Models.Subject.update({
        subjectName:req.body.subjectName
      },{
          where: {id:req.body.id}
      }).then(data => {
        res.redirect(`/subject`)})
        .catch(err => {
            console.log(err);
        })
})

subject.get('/subjectAdd',(req, res) => {
    res.render('subjectadd', {
        title:`Add Subject page`,
        header:`Add data Subject`
    })
})

subject.post('/subjectadd',bodyParserUrlencoded, (req, res) => {
    // console.log(req.body);
    Models.Subject.create({
        subjectName:req.body.subjectName
    })
    .then(data => {
        res.redirect(`subject`)
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = subject