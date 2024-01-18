var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelize = require('./sequelize-config');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors')


var app = express();
sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada');
});
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/imagenes', express.static(__dirname + '/imagenes'));
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
