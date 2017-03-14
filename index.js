var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;
