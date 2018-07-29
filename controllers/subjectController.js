const models = require('../models');
const Subject = models.Subject;

module.exports = {

  showSubjects: (req, res) => {
    Subject.findAll(
      {
        order: [['id', 'ASC']]
      })
      .then(subjectsData => {
        res.render('subjects', { title: "Subjects List", subjectsData: subjectsData });
      })
      .catch(err => {
        res.send(err);
      })
  },

  getFormAdd: (req, res) => {
    res.render('subjectadd', { title: "Subject's Form" });
  },

  addSubject: (req, res) => {
    Subject.create({
      subject_name: req.body.subject_name
    })
      .then(subjectData => {
        res.redirect('/subjects');
      })
      .catch(err => {
        res.send(err);
      })
  },

  getSubject: (req, res) => {
    Subject.findById(req.params.id)
      .then(editSubject => {
        res.render('subjectedit', { title: 'Edit Subject Data', editSubject: editSubject });
      })
      .catch(err => {
        res.send(err);
      })
  },
  updateSubject: (req, res) => {
    Subject.update({
      subject_name: req.body.subject_name
    }, {
        where: { id: req.params.id }
      })
      .then(() => {
        res.redirect('/subjects');
      })
      .catch(err => {
        res.send(err);
      })
  },

  deleteSubject: (req, res) => {
    Subject.destroy({where: {id: req.params.id}})
    .then(() => {
      res.redirect('/subjects');
    })
    .catch(err => {
      res.send(err);
    })
  }

}