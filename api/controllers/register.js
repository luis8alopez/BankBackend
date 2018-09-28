const User = require('../models/users');
const mongoose = require('mongoose');

exports.register = (req,res)=>{
    
    const user = new User({
        id: req.body.id,
        country: req.body.country,
        name : req.body.name,
        password : req.body.password,
        email : req.body.email,
        cellphone : req.body.cellphone,
        birthDate : req.body.birthDate,
        address : req.body.address,
        account : new mongoose.Types.ObjectId(),
        balance : 0

    });
    user.save().then(result =>{
        console.log(result);
        res.status(200).json({
            message:'Doing POST to register users',
            createdUser: user
        });
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });

    
}