const model = require('../models');

class Controller {
  static showAll (){
    return model.Student.findAll({raw:true})
  }

  static add(inputObj){
    return model.Student.create(inputObj)
  }

  static findById(id){
    return model.Student.findById(id, {raw:true})
  }

  static update(inputObj, id){
    return model.Student.update(inputObj, {
      where: {
        id: id
      },
      returning:true
    })
  }

  static delete (id){
    return model.Student.destroy({where: {id:id}})
  }

}

module.exports = Controller;