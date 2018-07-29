const subject = require('express').Router()
const Model   = require('../../models')
const bodyParser = require('body-parser')
let urlEncodedParser  = bodyParser.urlencoded({extended:false})

/* START READ DATA STDUNET */
subject.get('/subjects', (req,res) => {
    Model.Subject.findAll({
        raw:true
    })
    .then( element => {
        res.render('subject.ejs', { dataSubject : (element)})
    })
})
/* END READ DATA STDUNET */


/* START UPDATE DATA STDUNET */
subject.post('/editSj', urlEncodedParser, (req,res) => {
    let editDataSubject = {
        subject_name: req.body.subject_name,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Model.Subject.update(editDataSubject, {where : {id : req.body.id}})
    .then(()=>{
        res.redirect('/subjects')
    })
})

subject.get('/editSubject/:id', (req,res) => {

    Model.Subject.findOne({
        raw:true,
        where : {id: req.params.id}
    })
    .then(data => {
        res.render('editSubject.ejs', { x : (data)})
    })
})
/* START EDIT DATA STDUNET */


/* START ADD DATA STDUNET */
subject.get('/addSubjects', (req,res) => {
    res.render('addSubject.ejs')
})

subject.post('/addSubjects', urlEncodedParser, (req,res) => {
    let dataSubject = {
        subject_name: req.body.subject_name,
        createdAt: new Date(),
        updatedAt: new Date()
    }
   Model.Subject.create(dataSubject)
   res.redirect('/addSubjects')
})
/* END ADD DATA STDUNET */


/* START DELETE STUDENT */
subject.get('/deleteSubject/:id', (req,res) => {
    console.log(req.params.id)
    Model.Subject.destroy({
        raw:true,
        where : {id: req.params.id}
    })
    res.redirect('/subjects')
})
/* END DELETE STUDENT */

module.exports = subject