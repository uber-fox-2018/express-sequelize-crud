const express = require('express')
const app = express()
const routesIndex = require('./router/index')
const routesStudent = require('./router/student')
const routesTeacher = require('./router/teacher')
const routesSubject = require('./router/subject')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routesIndex)
app.use(routesStudent)
app.use(routesTeacher)
app.use(routesSubject)

app.listen(3030, () => {
  console.log('Listening port http://localhost:3030')
})