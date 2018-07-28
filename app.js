const app = require('express')();
const Model = require('./models')
// ================================
var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({extended:false})

//==================================

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/teachers', function(req, res) {
    Model.Teacher.findAll()
    .then(teachers =>{
        res.send(teachers)
        
    })
        
});

app.get('/students', function(req, res) {
    Model.Student.findAll({})
    .then(students =>{        
        res.render('studentsData',{fileStudents:students})
        
    })
});
app.get('/students/add',function(req,res){ 
    res.render('studentAdd')

})
app.post('/students/add',urlencodeParser ,function(req,res){
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date,
        updatedAt: new Date
    }
    
    Model.Student.create(data)
})

app.listen(8080,()=>{
    console.log('silahkan akses localhost:8080');
});