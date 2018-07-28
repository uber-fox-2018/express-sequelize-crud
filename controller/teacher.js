const Model = require('../models')

module.exports = {
  add: (req, res) => {
    const request = req.body

    Model.Teacher
      .findOne({
        where: {
          email: request.email
        }
      })
      .then(data => {
        if(data) {
          res.render('form_teacher', {message: null, error: 'Email is already use'})
        } else {
          Model.Teacher
            .create({
              first_name: request.first_name,
              last_name: request.last_name,
              email: request.email,
              birthday: request.birthday
            })
            .then(() => {
              res.render('form_teacher', {message: 'Save data success', error: null})
            })
            .catch(err => {
              res.render('form_teacher', {message: null, error: err.message})
            })
        }
      })
  },
  showDataTeacher: (req, res) => {
    Model.Teacher
      .findAll({
        order: [
          ['id', 'ASC']
        ]
      })
      .then(dataAllTeacher => {
        res.render('teacher', {data: dataAllTeacher, message: null, error: null})
      })
      .catch(err => {
        res.render('teacher', {data: null, message: null, error: err.message})
      })
  },
  findTeacher: (req, res) => {
    Model.Teacher
      .findById(req.params.id)
      .then(dataFindTeacher => {
        res.render('form_edit_teacher', {
          data: dataFindTeacher,
          message: null,
          error: null
        })
      })
      .catch(err => {
        res.render('form_edit_teacher', {
          data: null,
          message: null,
          error: err.message
        })
      })
  },
  updateTeacher: (req, res) => {
    let request = req.body
    Model.Teacher
      .update({
        first_name: request.first_name,
        last_name: request.last_name,
        email: request.email
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        Model.Teacher
          .findById(req.params.id)
          .then(dataTeacher => {
            res.render('form_edit_teacher', {
              data: dataTeacher,
              message: 'Data successfully update',
              error: null
            })
          })
      })
      .catch(err => {
        Model.Teacher
          .findById(req.params.id)
          .then(data => {
            res.render('form_edit_teacher', {
              data: data,
              message: null,
              error: err.message
            })
          })
      })
  },
  deleteTeacher: (req, res) => {
    Model.Teacher
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        Model.Teacher
          .findAll()
          .then(dataAllTeacher => {
            res.render('teacher', {
              data: dataAllTeacher,
              message: 'Delete teacher successfully',
              error: null
            })
          })
          .catch(err => {
            res.render('teacher', {
              data: dataAllTeacher,
              message: null,
              error: err.message
            })
          })
      })
      .catch(err => {
        res.render('teacher', {
          message: null,
          error: err.message
        })
      })
  }

}