const router = require('express').Router()
const Controller = require('../controller/subject')

router.get('/',(req,res)=>{
    Controller.showData()
    .then(data =>{
        res.render('subject/showData',{dataSubject : data})
    })

    .catch(err =>{
        console.log(err);
        
    })
})

router.get('/add',(req,res)=>{
    res.render('subject/addSubject')
})

// router.post('/add',(res,req)=>{
//     console.log(req.body.subject_name);
    
//     Controller.addData({
//         subject_name : req.body.subject_name
//     })
//     then(()=>{
//         res.redirect('/subject')
//     })

//     .catch(err =>{
//         console.log(err);
        
//     })
    
// })


module.exports = router