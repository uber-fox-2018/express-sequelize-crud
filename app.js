const express = require('express')
const app = express()
var Model = require('../express-sequelize-crud/models')
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/',routes)

//delete handle

app.listen(3005, () => {
    console.log('listening on port 3005')
})