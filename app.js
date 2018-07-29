const express = require('express')
const app     = express()
const port    = 3000
const Model   = require('./models')

app.use(express.static(__dirname + '/views'))
app.set('view engine', 'ejs')

app.get('/students', (req,res) => {
    Model.Student.findAll({raw:true})
        .then( element => {
            res.render('student.ejs', { dataStudent : (element)})
        })
})

app.get('/add-students', (req,res) => {
    res.render()
})

app.get('/teachers', (req,res) => {
    res.send('ini halaman teacher')
})

app.get('/', (req,res) => {
    res.send('ini halaman home')
})

app.listen(port, () => {
    console.log('app listening on port ', port)
})