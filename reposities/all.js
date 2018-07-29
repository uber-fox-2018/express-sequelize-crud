const model = require('../models')

module.exports = (model, view) => {
    Model.findAll({order: [
        ['id']
    ]})
    .then(models => {
        res.render("students/", { models })
    })
    .catch(err => {
        res.status(500).json(err)
    })
}