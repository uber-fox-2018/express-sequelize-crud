const Model = require('../models/index')

class Controller{
    static showData(){
        return new Promise(function(res,rej){
            Model.Subject.findAll()
            .then(data =>{
                res(data)
            })

            .catch(err =>{
                rej(err)
            })
        })
    }

    static addData(obj){
        return new Promise(function(res,rej){
            Model.Subject.create(obj)
            .then(()=>{
                res()
            })

            .catch(err=>{
                rej(err)
            })
        })
    }
}

module.exports = Controller