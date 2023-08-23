var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars')
var session=require('express-session')
const nocache = require('nocache')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var db=require('./cofig/connection')
var fileupload = require('express-fileupload')
var app = express();


var hbs= hbs.create({ 
  extname:'hbs', 
defaultLayout:'layout',
layoutsDir: path.join(__dirname,'views/layouts/'),
partialsDir:path.join(__dirname,'views/partciels/'),

helpers:{
 time: function(n,block){
   var accum=''
   for(var i = 0; i <=n; ++i){
    accum += block.fn(n+1);
   return accum;
   }
 }
}
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine("hbs",hbs.engine);
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"key",cookie:{maxAge:600000}}))
app.use(fileupload())
app.use(nocache())

db.connect((err)=>{
  if(err) console.log('connection error')
  else console.log('connection success')
  })
app.use('/admin', indexRouter);
app.use('/', usersRouter);

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
