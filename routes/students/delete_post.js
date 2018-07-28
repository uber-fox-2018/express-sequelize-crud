const model = require('../../models')

module.exports = (req, res) => {
    let id = req.params.studentId * 1

    model.Student
        .destroy({ where: { id } })
        .then(changes => {
            res.redirect('/students')
        })
        .catch(err => {
            res.status(500).json(err)
        })
}