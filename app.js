const express = require ('express');
const app = express();
const index = require ('./routes/index');
const students = require ('./routes/students');
const subjects = require ('./routes/subjects');
const teachers = require ('./routes/teachers');
const bodyParser = require ('body-parser')

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', index);
app.use('/students', students);
app.use('/subjects', subjects);
app.use('/teachers', teachers);

app.listen (3000, ()=> {
  console.log('connected to server')
})