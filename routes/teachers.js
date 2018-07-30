const routes = require ('express').Router();
const controller = require ('../controllers/teacher');

routes.get('/', (req, res) => {
  controller.showAll()
  .then( teachers => {
    res.render('teachers', {teachers})
  })
  .catch( err => {
    res.send(err.message);
  })
})

routes.get('/add', (req, res) => {
  res.render('teachers-add')
})

routes.post('/add', (req, res) => {
  let newTeacher = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  }
  controller.add(newTeacher)
  .then(()=> {
    res.render('teachers-add')
  })
  .catch(err => {
    res.send(err.message);
  })
})

routes.get('/edit/:id', (req, res) => {
  controller.findById(req.params.id)
  .then((teacher) => {
    res.render('teachers-edit', {teacher})
  })
  .catch(err => {
    res.send(err.message);
  })
})

routes.post('/edit/:id', (req, res) => {
  let newTeacher = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  }
  controller.update(newTeacher, req.params.id)
  .then(() => {
    res.send('Data updated!')
  })
  .catch(err => {
    res.send(err.message);
  })
})

routes.get('/delete/:id', (req, res)=> {
  controller.delete(req.params.id)
  .then(()=> {
    res.redirect('/teachers');
  })
  .catch(err => {
    res.send(err.message);
  })
})

module.exports = routes

