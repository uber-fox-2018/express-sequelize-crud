const Model = require('../models/index')
class Student{
    static showData(){
        return Model.Student.findAll({order: [
            ['id', 'ASC'],
            ['first_name', 'ASC'],
        ],})
    }

    static addStudent(obj){
        return Model.Student.create(obj)
    }

    static findById(id){
        return Model.Student.findById(id)
    }

    static editStudent(objData, objCondition){
        return Model.Student.update(objData,objCondition)
    }

    static deleteStudent(obj){
        return Model.Student.destroy(obj)
    }
}

module.exports = Student