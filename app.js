var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var spaceRouter = require('./routes/space');
var usersRouter = require('./routes/users');
const {vueDir} = require("./helpers");

var app = express();

app.use(express.static(vueDir));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/space', spaceRouter);
app.use('/users', usersRouter);

module.exports = app;
