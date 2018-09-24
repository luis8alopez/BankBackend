const express = require("express");
const router = express.Router();

router.post('/',(req,res,next)=>{

    res.status(200).json({
        message: 'Im working'
        
    });
});

router.get('/',(req,res,next)=>{

    res.status(200).json({
        message: 'Im working'
        
    });
});

module.exports = router;
