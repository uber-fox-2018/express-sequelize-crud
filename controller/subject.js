const Model = require('../models')

module.exports = {
  add: (req, res) => {
    Model.Subject
      .create({
        subject_name: req.body.subject_name
      })
      .then(() => {
        res.render('form_subject', {
          message: 'Save data success', 
          error: null
        })
      })
      .catch(err => {
        res.render('form_subject', {
          message: null, 
          error: err.message
        })
      })
  },
  showAllSubject: (req, res) => {
    Model.Subject
      .findAll({
        order: [
          ['id', 'ASC']
        ]
      })
      .then(dataAllSubject => {
        res.render('subject', {
          data: dataAllSubject, 
          message: null, 
          error: null
        })
      })
      .catch(err => {
        res.render('subject', {
          data: null, 
          message: null, 
          error: err.message
        })
      })
  },
  findSubject: (req, res) => {
    Model.Subject
      .findById(req.params.id)
      .then(dataFindSubject => {
        res.render('form_edit_subject', {
          data: dataFindSubject,
          message: null,
          error: null
        })
      })
      .catch(err => {
        res.render('form_edit_subject', {
          data: null,
          message: null,
          error: err.message
        })
      })
  },
  updateSubject: (req, res) => {
    Model.Subject
      .update({
        subject_name: req.body.subject_name
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        Model.Subject
          .findById(req.params.id) 
          .then(dataUpdate => {
            res.render('form_edit_subject', {
              data: dataUpdate, 
              message: 'Data successfully update', 
              error: null
            })
          })
      })
      .catch(err => {
        Model.Subject
          .findById(req.params.id) 
          .then(dataUpdate => {
            res.render('form_edit_subject', {
              data: dataUpdate,
              message: null, 
              error: err.message
            })
          })      
      })
  },
  deleteSubject: (req, res) => {
    Model.Subject
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(() => {
        Model.Subject
          .findAll()
          .then(dataAllSubject => {
            res.render('subject', {
              data: dataAllSubject,
              message: 'Delete subject successfully',
              error: null
            })
          })
          .catch(err => {
            res.render('subject', {
              data: dataAllTeacher,
              message: null,
              error: err.message
            })
          })
      })
      .catch(err => {
        res.render('subject', {
          message: null,
          error: err.message
        })
      })
  }
}