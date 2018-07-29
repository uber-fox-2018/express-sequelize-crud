const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

const routesHomepage = require('./routes/homepage');
const routesTeachers = require('./routes/teachers');
const routesStudents = require('./routes/students');
const routesSubjects = require('./routes/subjects');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.use(routesHomepage);
app.use(routesTeachers);
app.use(routesStudents);
app.use(routesSubjects);


app.listen(3000, () => {
    console.log(`listening on port 3000...`);
})