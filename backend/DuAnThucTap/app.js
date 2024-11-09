var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users/users');
var loginRouter = require('./routes/client/auth/authRoute');
var usersRouter = require('./routes/users/users');
const paymentRouter = require('./routes/payments/index');
const couponRouter = require('./routes/coupons/index');
const shippingRouter = require('./routes/shipping/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// ket noi mongodb
// const database = require('./config/db');
const connectDB = require('./config/db');
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/payments', paymentRouter);
app.use('/coupons', couponRouter);
app.use('/shipping', shippingRouter);


const notificationRoutes = require('./routes/notifications/index');
app.use('/notifications', notificationRoutes);
const live_chatRoutes = require('./routes/live_chat/index');
app.use('/api/live_chats', live_chatRoutes);
const live_chat_detailRoutes = require('./routes/live_chat_detail/index');
app.use('/api/live_chat_details', live_chat_detailRoutes);



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
