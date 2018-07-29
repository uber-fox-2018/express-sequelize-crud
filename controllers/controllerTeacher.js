const Model = require('../models')

class ControllerTeacher {
    static showTeacher () {
        return Model.Teacher.findAll({raw: true})
    }

    static createTeacher (firstName, lastName, email) {
        return Model.Teacher.create({
            firstName: firstName,
            lastName: lastName,
            email: email
        })
    }

    static getTeacher (id) {
        return Model.Teacher.findOne({
            where: {id: id}
        })
    }

    static updateTeacher (id, firstName, lastName, email) {
        return Model.Teacher.update({
            firstName: firstName,
            lastName: lastName,
            email: email
        }, {where: {id: id}})
    }

    static deleteTeacher (id) {
        return Model.Teacher.destroy({
            where: {id: id}
        })
    }

}

module.exports = ControllerTeacher