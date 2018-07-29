const Model = require('../models')

module.exports = {
  add: (req, res) => {
    let request = req.body

    Model.Student
      .findOne({
        where: {
          email: request.email
        }
      })
      .then(data => {
        if (data) {
          res.render('form_student', {message: null, error: 'Email is already use'})
        } else {
          Model.Student
            .create({
              first_name: request.first_name,
              last_name: request.last_name,
              email: request.email,
              birthday: request.birthday
            })
            .then(() => {
              res.render('form_student', {message: 'Data save successfully', error: null})
            })
            .catch(err => {
              res.render('form_student', {message: null, error: err.message})
            })
        }
      })
  },
  showAllData: (req, res) => {
    Model.Student
      .findAll({
        order: [
          ['id', 'ASC']
        ]
      })
      .then(dataAllStudent => {
        res.render('student', {data: dataAllStudent, message: null, error: null})
      })
      .catch(err => {
        res.render('student', {data: null, message: null, error: err.message})
      })
  },
  findStudent: (req, res) => {
    Model.Student
      .findById(req.params.id)
      .then(dataFind => {
        res.render('form_edit_student', {
          message: null,
          data: dataFind,
          error: null
        })
      })
      .catch(err => {
        res.render('form_edit_student', {
          message: null,
          data: null,
          error: err.message
        })
      })
  },
  updateStudent: (req, res) => {
    let request = req.body
    Model.Student.update({
        first_name: request.first_name,
        last_name: request.last_name,
        email: request.email
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        Model.Student
          .findById(req.params.id)
          .then(dataStudent => {
            res.render('form_edit_student', {
              data: dataStudent, 
              message: 'Data successfully update', 
              error: null
            })
          })
      })
      .catch(err => {
        Model.Student
          .findById(req.params.id)
          .then(data => {
            res.render('form_edit_student', {
              data: data, 
              message: null, 
              error: err.message
            })
          })
      })
  },
  deleteStudent: (req, res) => {
    Model.Student
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        Model.Student
          .findAll()
          .then(dataAllStudent => {
            res.render('student', {data: dataAllStudent, message: 'Delete student successfully', error: null})
          })
      })
      .catch(err => {
        res.render('student', {message: null, error: err.message})
      })
  }
}