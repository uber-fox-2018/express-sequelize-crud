const model = require('../models');

class Controller {
  static showAll (){
    return model.Subject.findAll({raw:true})
  }

  static add(inputObj){
    return model.Subject.create(inputObj)
  }

  static findById(id){
    return model.Subject.findById(id, {raw:true})
  }

  static update(inputObj, id){
    return model.Subject.update(inputObj, {
      where: {
        id: id
      },
      returning:true
    })
  }

  static delete (id){
    return model.Subject.destroy({where: {id:id}})
  }

}

module.exports = Controller;