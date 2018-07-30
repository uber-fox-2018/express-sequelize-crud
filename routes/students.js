const routes = require ('express').Router();
const controller = require ('../controllers/student');

routes.get('/', (req, res) => {
  controller.showAll()
  .then( students => {
    res.render('students', {students})
  })
  .catch( err => {
    res.send(err.message);
  })
})

routes.get('/add', (req, res) => {
  res.render('students-add')
})

routes.post('/add', (req, res) => {
  let newStudent = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  }
  controller.add(newStudent)
  .then(()=> {
    res.render('students-add')
  })
  .catch(err => {
    res.send(err.message);
  })
})

routes.get('/edit/:id', (req, res) => {
  controller.findById(req.params.id)
  .then((student) => {
    res.render('students-edit', {student})
  })
  .catch(err => {
    res.send(err.message);
  })
})

routes.post('/edit/:id', (req, res) => {
  let newStudent = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  }
  controller.update(newStudent, req.params.id)
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
    res.redirect('/students');
  })
  .catch(err => {
    res.send(err.message);
  })
})

module.exports = routes