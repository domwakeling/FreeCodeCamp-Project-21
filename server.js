var express = require('express');
var portToUse = process.env.PORT || 8080;


var app = express();

app.get('/', function(req,res) {
    res.send("Hello World!");
});

app.listen(portToUse, function() {
    console.log("Server started, listening on port", portToUse);
});