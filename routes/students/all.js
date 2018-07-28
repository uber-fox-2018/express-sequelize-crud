const model = require('../../models')

module.exports = (req, res) => {
    model
        .Student
        .findAll()
        .then(students => {
            res.render("students/", { students })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}