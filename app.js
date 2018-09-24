const express = require("express");
const app = express();
const morgan = require('morgan');

const registerRoutes = require('./api/routes/register');
const loginRoutes = require('./api/routes/login');

app.use(morgan('dev'));
//Rutas.
app.use('/register',registerRoutes);
app.use('/login',loginRoutes);

module.exports = app;