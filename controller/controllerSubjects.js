const ModelSubject = require('../models/')

class ControllerSubject {
    static showSubjects() {
        return new Promise (function (resolve, reject) {
            ModelSubject.Subject.findAll()
            .then(dataSubject => {
                resolve(dataSubject)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static addSubject(subjectObj) {
        return new Promise(function (resolve, reject) {
            ModelSubject.Subject.create(subjectObj)
            .then(() => {
                resolve(`Successfully to added`)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static editSubject(obj, id) {
        
    }
}

module.exports = ControllerSubject