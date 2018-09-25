const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const registerRoutes = require('./api/routes/register');
const loginRoutes = require('./api/routes/login');

mongoose.connect('mongodb+srv://bank:bank@bank-db-qtwyy.mongodb.net/bank-db?retryWrites=true',{
    useNewUrlParser:true
});


//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//CORS error HANDLER
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});
//Rutas.
app.use('/register',registerRoutes);
app.use('/login',loginRoutes);

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