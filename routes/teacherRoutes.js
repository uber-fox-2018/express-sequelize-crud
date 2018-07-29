const teacherRoutes = require("express").Router();

const ejs = require("ejs");
const Model = require("../models");

teacherRoutes.get("/teachers", (req, res) => {
  Model.Teacher.findAll().then(data => {
    res.render("teacher-ejs/teachersList", { Teachers: data });
  });
});

teacherRoutes.get("/teachers/add", (req, res) => {
  res.render("teacher-ejs/addTeacher");
});

teacherRoutes.post("/teachers/add", (req, res) => {
  Model.Teacher.create(req.body)

    .then(() => {
      res.redirect("/teachers");
    })
    .catch(err => {
      res.redirect("/teachers", { show: err });
    });
});

teacherRoutes.get("/teachers/delete/:id", (req, res) => {
  let id = req.params.id;
  Model.Teacher.destroy({ where: { id: id } }).then(() => {
    res.redirect("/teachers");
  });
});

teacherRoutes.get("/teachers/edit/:id", function(req, res) {
  let id = req.params.id;
  Model.Teacher.findById(id).then(function(teachers) {
    res.render("teacher-ejs/editTeacher", { Teachers: teachers });
  });
});

teacherRoutes.post("/teachers/edit/:id", function(req, res) {
  let id = req.params.id;
  Model.Teacher.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    },
    { where: { id: id } }
  ).then(function() {
    res.redirect("/teachers");
  });
});

module.exports = teacherRoutes;
