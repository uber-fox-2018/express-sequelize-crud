const models = require('../models/');
const Teacher = models.Teacher;

module.exports = {

    showTeachers: (req, res) => {
        Teacher.findAll({
            order: [['id', 'ASC']]
        })
            .then(teachersData => {
                res.render('teachers', { title: "Teachers List", teachersData: teachersData });
            })
            .catch(err => {
                res.send(err);
            })
    },

    getFormAdd: (req, res) => {
        res.render('teacheradd', { title: "Teacher's Form" })
    },

    addTeacher: (req, res) => {
        Teacher.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
            .then(teacherData => {
                res.redirect('/teachers');
            })
            .catch(err => {
                res.send(err);
            })
    },

    getTeacher: (req, res) => {
        Teacher.findById(req.params.id)
            .then(editTeacher => {
                res.render('teacheredit', { title: 'Edit Teacher Data', editTeacher: editTeacher })
            })
            .catch(err => {
                res.send(err);
            })
    },

    updateTeacher: (req, res) => {
        Teacher.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }, {
                where: { id: req.params.id }
            })
            .then(() => {
                res.redirect('/teachers');
            })
            .catch(err => {
                res.send(err);
            })
    },

    deleteTeacher: (req, res) => {
        Teacher.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.redirect('/teachers');
            })
            .catch(err => {
                res.send(err);
            })
    }


}