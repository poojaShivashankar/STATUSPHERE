var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport')
var mongoose = require('mongoose');
var mongo= require('mongodb');

var index = require('./Backend/routes/index');
var users = require('./Backend/routes/users');

var applicant = require('./Backend/models/applicant');

var acceptedlist = require('./Backend/routes/acceptedlist');

// API for applicants
// More documentation in Backend/routes/api/applicantlist
var applicantlist = require('./Backend/routes/api/applicantlist');


// API for influencers
// More documentation in Backend/routes/api/influencerlist
var influencerlist = require('./Backend/routes/api/influencerlist');

// API for messages
// More documentation in Backend/routes/api/messagelist
var messagelist = require('./Backend/routes/api/messagelist');

// API for messages
// More documentation in Backend/routes/api/messagelist
var verificationlist = require('./Backend/routes/api/verificationlist');

// API for packages
// More documentation in Backend/routes/api/packagelist
var packagelist = require('./Backend/routes/api/packagelist');

// API for products
// More documentation in Backend/routes/api/productlist
var productlist = require('./Backend/routes/api/productlist');



var app = express();
mongoose.connect('mongodb://localhost:27017/Statusphere');
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon inpublic
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Frontend')));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/Frontend/Startup.html');
});
app.get('/admin/', function(req, res){
    res.sendFile(__dirname + '/Frontend/Product.html');
});


// app.use('/users', users);


require('./Backend/config/passport');

app.use(passport.initialize());
app.use('/', index);
app.use('/acceptedlist', acceptedlist);
app.use('/api/applicantlist', applicantlist);
app.use('/api/influencerlist', influencerlist);
app.use('/api/packagelist', packagelist);
app.use('/api/messagelist', messagelist);
app.use('/api/verificationlist', verificationlist);
app.use('/api/productlist', productlist);


// app.use('/api', routesApi);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
// app.use(function(req, res) {
//   res.sendFile(path.join(__dirname, 'app_client', 'index'));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


module.exports = app;  
