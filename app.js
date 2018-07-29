const express = require('express')
const student = require('./routes/student')
const subject =  require('./routes/subject')
let app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/student',student)
app.use('/subject',subject)


app.listen(3000, function(){
    console.log('listening on port 3000');
    
})