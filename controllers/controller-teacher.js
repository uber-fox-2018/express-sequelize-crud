const Model = require('../models')

class ControllerTeacher {
    static showData(){
        return Model.Teacher.findAll({
            order: [['id','asc']],
            raw:true
        })
    }

    static getTeacher(id){
        return Model.Teacher.findOne({
            where: {id: id}
        })
    }

    static createDataTeacher(first_name,last_name,email){
        return Model.Teacher.create({
            first_name: first_name,
            last_name: last_name,
            email: email
        })
    }

    static deleteTeacher(id){
        return Model.Teacher.destroy({
            where: {id:id}
        })
    }

    static editTeacher(id,first_name,last_name,email){
        return Model.Teacher.update({
            first_name: first_name,
            last_name: last_name,
            email: email
        },{where: {id: id}})
    }
}

module.exports = ControllerTeacher