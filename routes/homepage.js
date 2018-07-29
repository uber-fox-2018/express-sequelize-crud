const routesHomepage = require('express').Router();

routesHomepage.get('/', (req, res) => {
    res.render('homepage', {title: "Welcome - School's homepage"});
})

module.exports = routesHomepage;