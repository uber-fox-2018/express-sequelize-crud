const model = require('../models');

class Controller {
  static showAll (){
    return model.Teacher.findAll({raw:true})
  }

  static add(inputObj){
    return model.Teacher.create(inputObj)
  }

  static findById(id){
    return model.Teacher.findById(id, {raw:true})
  }

  static update(inputObj, id){
    return model.Teacher.update(inputObj, {
      where: {
        id: id
      },
      returning:true
    })
  }

  static delete (id){
    return model.Teacher.destroy({where: {id:id}})
  }

}

module.exports = Controller;