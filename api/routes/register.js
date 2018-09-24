const express = require("express");
const router = express.Router();

router.post('/',(req,res)=>{
    //Id missing.
    var country = req.body.country;
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var cellphone = req.body.cellphone;
    var birthdate = req.body.birthdate;
    var address = req.body.address;
    var account = 0;


    res.status(200).json({
        message:'Doing POST to register users'
    });
});

module.exports = router;