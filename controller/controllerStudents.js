const ModelStudent = require('../models/')

class ControllerStudent {
    static showStudents() {
        return new Promise (function (resolve, reject) {
            ModelStudent.Student.findAll()
            .then(dataStudent => {
                resolve(dataStudent)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static addStudent(StudentObj) {
        return new Promise(function (resolve, reject) {
            ModelStudent.Student.create(StudentObj)
            .then(() => {
                resolve(`Successfully to added`)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static editStudent(data, id) {
        return new Promise(function (resolve, reject) {
            ModelStudent.Student.update(data, {
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
            ModelStudent.Student.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static removeStudent(id) {
        return new Promise(function (resolve, reject) {
            ModelStudent.Student.destroy({
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

module.exports = ControllerStudent