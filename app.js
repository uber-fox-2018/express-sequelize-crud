'use strict'

const app = require('express')()

const routes = require('./routes')

const port = 4545

app.use('/', routes)

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})