const router = require('express').Router()
const controller = require('../controller/student')

router.get('/',(req,res)=>{
    controller.showData()
    .then(data =>{
        res.render('student/showData',{dataStudent : data})
        
    })
    .catch(err =>{
        console.log(err);
        
    })


})

router.get('/add',(req,res)=>{
    res.render('student/addStudent')
})

router.post('/add',(req,res)=>{
    controller.addStudent({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    })
    .then(() =>{
        res.redirect('/student')
    })

    .catch(err =>{
        console.log(err);
        
    })
})

router.get('/edit/:id',(req,res)=>{
    controller.findById(req.params.id)
    .then(dataToEdit =>{
        console.log(dataToEdit);
        
        res.render('student/editStudent',{dataToEdit : dataToEdit})
    })

    .catch(err =>{
        console.log(err);
        
    })
})

router.post('/edit/:id',(req,res)=>{
    controller.editStudent({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    },{where : {id : req.params.id}})
    .then(()=>{
        res.redirect('/student')
    })
    .catch(err =>{
        console.log(err);
        
    })
})

router.get('/delete/:id',(req,res)=>{
    controller.deleteStudent({where : {id : req.params.id}})
    .then(()=>{
        res.redirect('/student')
    })
    .catch(err =>{
        console.log(err);
        
    })
})


module.exports = router