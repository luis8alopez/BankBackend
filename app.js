const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const registerRoutes = require('./api/routes/register');
const userRoutes = require('./api/routes/user');
const sendRoutes = require('./api/routes/send');
const adminRoutes = require('./api/routes/admin');

mongoose.connect('mongodb+srv://bank:bank@bank-db-qtwyy.mongodb.net/bank-db?retryWrites=true',{
    useNewUrlParser:true});

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({secret:"interamericanbank",resave:false,saveUninitialized:true}));

//CORS error HANDLER
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
    //res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

//Rutas.
app.use('/register',registerRoutes);
app.use('/user',userRoutes);
app.use('/send',sendRoutes);
app.use('/admin',adminRoutes);

// Error Handler
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;