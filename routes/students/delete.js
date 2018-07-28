const model = require('../../models')

module.exports = (req, res) => {
    const id = req.params.studentId * 1;

    model.Student
        .findOne({ where: { id } })
        .then(student => {
            res.render("students/delete", { student })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}