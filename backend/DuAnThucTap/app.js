var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const categoryRoutes = require('./routes/categorys');
var brandRouter = require('./routes/brands/index.js');
const productRoutes = require('./routes/products');
const reviewRoutes = require('./routes/reviews');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Kết nối MongoDB
const database = require('./config/db');
database.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Khai báo các route
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/categories', categoryRoutes);
app.use('/api/brands', brandRouter);  
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
  // catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
