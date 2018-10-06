var express = require('express');
var app = express();

// index.html static serve index.html
app.use(express.static(__dirname + './../../public/'));
app.listen(3000);

