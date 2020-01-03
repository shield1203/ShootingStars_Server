var express = require('express');
var app = express();

var router = require('./router/main')(app);

var server = app.listen(3000, function(){
    console.log('Start Server!');
})