const app = require('express')();
const routes = require('./routes')

app.set('view engine', 'ejs');

app.use('/',routes)

app.listen(8080,()=>{
    console.log('silahkan akses localhost:8080');
});