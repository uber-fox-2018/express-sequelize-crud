const models = require('../models');
const Student = models.Student;

module.exports = {

    showStudents: (req, res) => {
        Student.findAll({
            order: [['id', 'ASC']]
        })
            .then(studentsData => {
                res.render('students', { title: "Students List", studentsData: studentsData });
            })
            .catch(err => {
                res.send(err);
            })
    },

    getFormAdd: (req, res) => {
        res.render('studentadd', { title: "Student's Form" });
    },

    addStudent: (req, res) => {
        Student.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        })
            .then(studentData => {
                res.redirect('/students');
            })
            .catch(err => {
                res.send(err);
            })
    },

    getStudent: (req, res) => {
        Student.findById(req.params.id)
            .then(editStudent => {
                res.render('studentedit', { title: 'Edit Student Data', editStudent: editStudent });
            })
            .catch(err => {
                res.send(err);
            })
    },

    updateStudent: (req, res) => {
        Student.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }, {
                where: { id: req.params.id }
            })
            .then(() => {
                res.redirect('/students');
            })
            .catch(err => {
                res.send(err);
            })
    },

    deleteStudent: (req, res) => {
        Student.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.redirect('/students');
            })
            .catch(err => {
                res.send(err);
            })
    }


}