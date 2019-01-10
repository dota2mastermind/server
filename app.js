var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dota2mastermind');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const dotaRouter = require('./routes/dota');
const youtubeRouter = require('./routes/youtube');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/users', usersRouter);
// app.use('/dota', dotaRouter);
app.use('/youtube', youtubeRouter);
=======
// app.use('/users', usersRouter);
app.use('/dota', dotaRouter);
// app.use('/youtube', youtubeRouter);
>>>>>>> c9d639b2a57512547319b5a3abd6f7f59180c73e

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
