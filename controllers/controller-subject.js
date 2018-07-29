const Model = require('../models')

class ControllerSubject {
    static showData(){
        return Model.Subject.findAll()
    }

    static addSubject(subject){
        return Model.Subject.create({
            subject_name: subject
        })
    }

    static getSubject(id){
        return Model.Subject.findOne({
            where: {id: id}
        })
    }

    static deleteSubject(id){
        return Model.Subject.destroy({
            where: {id:id}
        })
    }

    static editSubject(id,subject_name){
        return Model.Subject.update({
            subject_name: subject_name
        },{where: {id: id}})
    }
}

module.exports = ControllerSubject