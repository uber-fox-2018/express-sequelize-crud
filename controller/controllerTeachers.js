const ModelTeacher = require('../models')

class ControllerTeacher {
    static showTeachers() {
        return new Promise (function (resolve, reject) {
            ModelTeacher.Teacher.findAll()
            .then(dataTeacher => {
                resolve(dataTeacher)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static addTeacher(teacherObj) {
        return new Promise(function (resolve, reject) {
            ModelTeacher.Teacher.create(teacherObj)
            .then(() => {
                resolve(`Successfully to added`)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static editTeacher(data, id) {
        return new Promise(function (resolve, reject) {
            ModelTeacher.Teacher.update(data, {
                where: {
                    id: id
                }
            })
            .then(() => {
                resolve('Success To update')
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static find(id) {
        return new Promise(function (resolve, reject) {
            ModelTeacher.Teacher.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static removeTeacher(id) {
        return new Promise(function (resolve, reject) {
            ModelTeacher.Teacher.destroy({
                where: {
                    id:id
                }
            })
            .then(removed => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}


module.exports = ControllerTeacher