const express = require("express");
const app = express();

const port = 3000

// using for project
app.use(express.static('public'));


app.listen(port, function() {
    console.log(`Server is running on port: ${port}`)
})