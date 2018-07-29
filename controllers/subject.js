const models = require('../models');
const Subject = models.Subject;

module.exports = {
    getAllSubjects : (req, res) =>{
        Subject.findAll({order: [['id', 'ASC']]})
                .then(subjectsData=>{
                    res.render("subjects", {subjects : subjectsData})
                })
                .catch(err => {
                    res.render("error");
                 })
    },

    addForm : (req, res) =>{
        res.render("add_subject_form")
    },

    addSubject : (req, res) =>{
        let newSubject = req.body; //e.g. { subject_name: 'Math' }
        Subject.create({
            subject_name : newSubject.subject_name[0].toUpperCase() + newSubject.subject_name.slice(1)
        })
                .then(newSubject =>{
                    res.redirect("/subjects")
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    getSubject : (req, res) => {
        let id = req.params.id;
            Subject.findById(id)
                .then(subject=>{
                    res.render("edit_subject", {subject : subject})
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    updateSubject : (req, res) =>{
        let subject = req.body;
        let id = req.params.id;
        Subject.update({
            subject_name : subject.subject_name[0].toUpperCase() + subject.subject_name.slice(1)
        }, {
                where: {id: id}
            })
                .then(updatedSubject =>{
                    res.redirect("/subjects")
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    deleteSubject: (req, res) =>{
        let id = req.params.id;
        Subject.destroy({
            where: {id : id}
        })
                .then(deletedSubject =>{
                    res.redirect("/subjects");
                })
                .catch(err =>{
                    res.render("error");
                })
    }
}