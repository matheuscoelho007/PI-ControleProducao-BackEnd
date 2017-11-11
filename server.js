var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./Routes/router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mydb');

var port = process.env.PORT || 5000;

app.use('/api', router);

app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);

module.exports = app;