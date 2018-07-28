const Model = require('../models')

class ControllerStudent {
    static showData(){
        return Model.Student.findAll({
            order: [['id','asc']],
            raw:true
        })
    }

    static getStudent(id){
        return Model.Student.findOne({
            where: {id: id}
        })
    }

    static createDataStudent(first_name,last_name,email){
        return Model.Student.create({
            first_name: first_name,
            last_name: last_name,
            email: email
        })
    }

    static deleteStudent(id){
        return Model.Student.destroy({
            where: {id:id}
        })
    }

    static editStudent(id,first_name,last_name,email){
        return Model.Student.update({
            first_name: first_name,
            last_name: last_name,
            email: email
        },{where: {id: id}})
    }
}

module.exports = ControllerStudent