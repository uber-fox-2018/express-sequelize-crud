const models = require('../models');
const Teacher = models.Teacher;
module.exports = {
    getAllTeachers : (req, res) =>{
        Teacher.findAll({order: [['id', 'ASC']]})
                .then(teachersData=>{
                    res.render("teachers", {teachers : teachersData})
                })
                .catch(err => {
                    res.render("error");
                 })
    },

    addForm : (req, res) =>{
        res.render("add_teacher_form")
    },

    addTeacher : (req, res) =>{
        let newTeacher = req.body; //e.g. { first_name: 'susan',last_name: 'nio' }
        Teacher.create({
            first_name : newTeacher.first_name[0].toUpperCase() + newTeacher.first_name.slice(1),
            last_name : newTeacher.last_name[0].toUpperCase() + newTeacher.last_name.slice(1),
        })
                .then(newTeacher =>{
                    res.redirect("/teachers")
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    getTeacher : (req, res) => {
        let id = req.params.id;
            Teacher.findById(id)
                .then(teacher=>{
                    res.render("edit_teacher", {teacher : teacher})
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    updateTeacher : (req, res) =>{
        let teacher = req.body;
        let id = req.params.id;
        Teacher.update({
            first_name : teacher.first_name[0].toUpperCase() + teacher.first_name.slice(1),
            last_name : teacher.last_name[0].toUpperCase() + teacher.last_name.slice(1),
        }, {
                where: {id: id}
            })
                .then(updatedTeacher =>{
                    res.redirect("/teachers")
                })
                .catch(err =>{
                    res.render("error");
                })
    },

    deleteTeacher : (req, res) =>{
        let id = req.params.id;
        Teacher.destroy({
            where: {id : id}
        })
                .then(deletedTeacher =>{
                    res.redirect("/teachers");
                })
                .catch(err =>{
                    res.render("error");
                })
    }
}