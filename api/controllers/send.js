const Nexmo = require('nexmo');


exports.send = (req,res)=>{
    var nexmo = new Nexmo({apiKey: '8ce523c1', apiSecret: 'CFjNnHUv8dhBKDL0'});

    var verifyRequestId = null; // use in the check process

    nexmo.verify.request({number: req.body.number, brand: 'de validacion'}, function(err, result) {
    if(err) { console.error(err); }
    else {
    verifyRequestId = result.request_id;
    console.log('request_id', verifyRequestId);
    res.status(200).json({
        message: 'Send succesful',
        requestId: result,
        resultStatus: result.status
        
    });
  }
}
)}
