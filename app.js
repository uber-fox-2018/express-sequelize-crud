const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const home = require('./routes/index')
const student = require('./routes/student')
const teacher = require('./routes/teacher')

app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', home)
app.use('/students',student)
app.use('/teachers',teacher)

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})