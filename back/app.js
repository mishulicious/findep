require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

//authenticate
const passport = require('./helpers/passport');
const session = require('express-session');

const cors = require("cors");

mongoose.Promise = Promise;
mongoose
    .connect(process.env.DATABASE, { useMongoClient: true })
    .then(() => {
        console.log('Connected to Mongo!')
    }).catch(err => {
        console.error('Error connecting to mongo', err)
    });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

//Cors
const options = {
    credentials: true,
    origin: true
}
app.use(require('cors')(options));

//Authenticate
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'alina',
    cookie: { httpOnly: true, maxAge: 241920000 }
}));

app.use(passport.initialize());
app.use(passport.session());


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

//rutas
const index = require('./routes/index');
app.use('/', index);

const auth = require('./routes/auth');
app.use('/auth', auth);

const expenses = require('./routes/expenses');
app.use('/expenses', expenses);

const metas = require('./routes/metas');
app.use('/metas', metas);


module.exports = app;