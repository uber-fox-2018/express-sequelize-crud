const express = require("express");
const app = express();
const index = require('./routes/index');
const students = require('./routes/students');
const teachers = require('./routes/teachers');
const subjects = require('./routes/subjects');
const error = require('./routes/error');

app.set("view engine", "ejs");
app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(index);
app.use(students);
app.use(teachers);
app.use(subjects);
app.use(error);

app.listen(3000, ()=>{
    console.log("Server has started!!")
})