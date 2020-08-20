var express = require("express");
var app = express();
var http = require('http');

app.get('/', (req, res) => {
 
app.use(express.static('public'))

app.listen(8000, () => {
    console.log("Project Assessment Website: running on port 8000");
});
