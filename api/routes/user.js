const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
const Consignment = require('../models/consignment');
const Transfer = require('../models/transfer');
const Retire = require('../models/retire');
const mongoose = require('mongoose');


const User = require('../models/users');

router.post('/signup',(req,res,next)=>{

    User.findOne({'email': req.body.email, 'password':req.body.password},function(err,respo){
        if(respo===null){
            return res.status(404).json({
                message: 'User does not exist'                
            });
        }        
        console.log('Encontré exitosamente a: ');
        console.log(respo);
        req.session.user=respo;
        const token = jwt.sign({    //Creación de token de duración 5 minutos
            email: respo.email,
            userId: respo.account
        },"secret",
        {
            expiresIn: "5m"
        }
        );
        res.status(200).json({
            message: 'Auth succesful',  
            returnedUser: respo,
            token: token      
        });
        
    }).select('name account balance id email')    

    
});

router.get('/logged',(req,res)=>{
if(!req.session.user){
    return res.status(401).send();
}  
return res.status(200).send("Welcome");  

});

router.post('/transfer',checkAuth,(req,res,next)=>{
    
    User.findOne({'account':req.body.account},function(err,ans){
        if(ans===null){
            res.status(401).json({
                message: 'Account not found'
            });
        }
        if(ans.balance>=req.body.ammount){
            var help;
            help=ans.balance-req.body.ammount;
            User.update({'account':ans.account},{$set:{balance:help}})
            .then(result=>{
                console.log(result);
                //res.status(200).json(result);            
            });

        User.findOne({'account':req.body.accountDestiny},function(err,ansa){
            if(ansa===null){
                res.status(401).json({
                    message: 'Account not found'
                });
            }
            var help2;
            help2=ansa.balance+req.body.ammount;
            User.update({'account':req.body.accountDestiny},{$set:{balance:help2 }})
            .then(result=>{
                console.log(result);
                //res.status(200).json(result);            
            });
            const transfer = new Transfer({
                _id: new mongoose.Types.ObjectId(),
                accountId: ans.account,
                accountDestiny: req.body.accountDestiny,
                ammount:req.body.ammount
            });
            transfer.save().then(resulta =>{
                console.log(resulta);
                res.status(200).json({
                    message:'Doing POST to transfer',
                    createdTransfer: transfer
                });
            })
            .catch(err=> {
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });

            });
        }


        console.log(ans);
    });
    

    console.log('si entro aquí es que el token funciona');
    //res.status(200).send();

});

router.post('/consign',checkAuth,(req,res,next)=>{
    User.findOne({'account':req.body.account},function(err,ans){
        if(ans===null){
            res.status(401).json({
                message: 'Account not found'
            });
        }
        console.log(ans);
        ans.balance = ans.balance + req.body.ammount;
        User.update({account:ans.account},{$set:{balance: ans.balance}})
        .then(result=>{
            console.log(result);
            //res.status(200).json(result);            
        });
        const consingment = new Consignment({
            _id: new mongoose.Types.ObjectId(),
            accountId: ans.account,
            ammount:req.body.ammount
        });
        consingment.save().then(resulta =>{
            console.log(resulta);
            res.status(200).json({
                message:'Doing POST to consignment',
                createdConsignment: consingment
            });
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });

    });

});

router.post('/retire',checkAuth,(req,res,next)=>{
    User.findOne({'account':req.body.account},function(err,ans){
        if(ans===null){
            res.status(401).json({
                message: 'Account not found'
            });
        }
        console.log(ans);
        if(ans.balance>=req.body.ammount){
            
        var help3 = ans.balance - req.body.ammount;
        User.update({account:ans.account},{$set:{balance: help3}})
        .then(result=>{
            console.log(result);
            //res.status(200).json(result);            
        });
        const retire = new Retire({
            _id: new mongoose.Types.ObjectId(),
            accountId: ans.account,
            ammount:req.body.ammount
        });
        retire.save().then(resulta =>{
            console.log(resulta);
            res.status(200).json({
                message:'Doing POST to retire',
                createdRetire: retire
            });
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });

    }

    });



});

module.exports = router;