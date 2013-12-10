var express  = require("express")
,   pth  = require("path")
,   dir = pth.join(__dirname, "..")
,   PORT = 4000
;

var express = require('express');
var app = express();
app.use(express.static(dir));
app.use(express.directory(dir));
app.listen(PORT, 'localhost');
