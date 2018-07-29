const express = require('express')
const app = express()
const routes = require('./routes/index')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get(teacherRoutes)
app.use('/', routes.routes)
app.use('/teachers', routes.routesTeacher)
app.use('/students', routes.routesStudent)
// app.get('/teachers/add', routes.routesTeacher)



app.listen(3000, (req, res) => {
    console.log(`i'm listen on port 3000`);
})