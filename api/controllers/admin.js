const User = require('../models/users');
const Consignment = require('../models/consignment');
const Transfer = require('../models/transfer');
const Retire = require('../models/retire');

exports.money_per_account = (req,res)=>{

    User.findOne({'email': req.body.email,'password': req.body.password},function(err,resp){
        if(resp===null){
            res.status(404).json({
                message: 'Wrong Email or Password'
            });
        }else{
        if(resp.email==='administrador@gmail.com'){
            User.find({ } ,'account balance',function (err, docs) {
                console.log(docs);                
                return res.status(200).json({
                    all: docs
                })
            });
        }else{
              return res.status(401).json({
                  message: 'Unauthorized user'                
              });

            }
        }
    }
)}

exports.totalConsignments = (req,res)=>{

    User.findOne({'email': req.body.email,'password': req.body.password},function(err,resp){
        if(resp===null){
            res.status(404).json({
                message: 'Wrong Email or Password'
            });
        }else{
        if(resp.email==='administrador@gmail.com'){
            Consignment.find({ },'account ammount',function (err, docs) {
                console.log(docs);                
                return res.status(200).json({
                    all: docs
                })
            });
        }else{
              return res.status(401).json({
                  message: 'Unauthorized user'                
              });

            }
        }
    }
)}

exports.totalTransfers = (req,res)=>{

    User.findOne({'email': req.body.email,'password': req.body.password},function(err,resp){
        if(resp===null){
            res.status(404).json({
                message: 'Wrong Email or Password'
            });
        }else{
        if(resp.email==='administrador@gmail.com'){
            Transfer.find({ },'accountId accountDestiny ammount',function (err, docs) {
                console.log(docs);                
                return res.status(200).json({
                    all: docs
                })
            });
        }else{
              return res.status(401).json({
                  message: 'Unauthorized user'                
              });

            }
        }
    }
)}

exports.totalRetires = (req,res)=>{

    User.findOne({'email': req.body.email,'password': req.body.password},function(err,resp){
        if(resp===null){
            res.status(404).json({
                message: 'Wrong Email or Password'
            });
        }else{
        if(resp.email==='administrador@gmail.com'){
            Retire.find({ },'account ammount',function (err, docs) {
                console.log(docs);                
                return res.status(200).json({
                    all: docs
                })
            });
        }else{
              return res.status(401).json({
                  message: 'Unauthorized user'                
              });

            }
        }
    }
)}

    
