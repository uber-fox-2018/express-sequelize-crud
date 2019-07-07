const Model = require('./models')
let obj = {
    first_name: 'kosasih',
    last_name: 'udin',
    email: 'kosasih@udin.com',
    createdAt: new Date,
    updatedAt: new Date
}
Model.Student.create(obj)