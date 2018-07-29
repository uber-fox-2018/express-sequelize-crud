const routes = require('express')()
const school = require('./schools')

routes.use(school.student)
routes.use(school.subject)
routes.use(school.teacher)

routes.get('/uberFoxSchool',(req,res) =>{
    res.render('home.ejs')
})

module.exports = routes