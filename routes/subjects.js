const routes = require ('express').Router();
const controller = require ('../controllers/subject');

routes.get('/', (req, res) => {
  controller.showAll()
  .then( subjects => {
    res.render('subjects', {subjects})
  })
  .catch( err => {
    res.send(err.message);
  })
})

routes.get('/add', (req, res) => {
  res.render('subjects-add')
})

routes.post('/add', (req, res) => {
  let newSubject = {
    subject_name: req.body.subject_name,
  }
  controller.add(newSubject)
  .then(()=> {
    res.render('subjects-add')
  })
  .catch(err => {
    res.send(err.message);
  })
})

routes.get('/edit/:id', (req, res) => {
  controller.findById(req.params.id)
  .then((subject) => {
    res.render('subjects-edit', {subject})
  })
  .catch(err => {
    res.send(err.message);
  })
})

routes.post('/edit/:id', (req, res) => {
  let newSubject = {
    subject_name: req.body.subject_name,
  }
  controller.update(newSubject, req.params.id)
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
    res.redirect('/subjects');
  })
  .catch(err => {
    res.send(err.message);
  })
})

module.exports = routes