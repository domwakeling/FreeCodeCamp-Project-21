var express = require('express');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var url = require('url');
var portToUse = process.env.PORT || 8080;

var months = ['January', 'February', 'March', 'April',
              'May', 'June', 'July', 'August', 'September',
              'October', 'November', 'December'];

var app = express();

app.use(sassMiddleware(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('*', function(req,res) {
    
    // console.log("Recognised a get");
    // console.log(path.join(__dirname, 'views/'));
    // app.use(express.static(path.join(__dirname, 'views/')));
    
    if(req.url.length > 1) {
        console.log("Dynamic response required");
        // console.log("__dirname is",__dirname);
        // app.use(express.static(path.join(__dirname,"/views")));
        // app.use(express.static('views'));
        res.end("Dynamic response required here");
    // } else {
    
    // console.log(req.url);
    // console.log(req.url.substr(1));
    // console.log(Date.parse(req.url.substr(1)));
    // console.log(parseInt(req.url.substr(1)));
    // res.send("Hello World!");
    }
});

app.listen(portToUse, function() {
    console.log("Server started, listening on port", portToUse);
});