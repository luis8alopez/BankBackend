const mongoose = require("mongoose");
const consignmentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },  
  accountId: {
    type: String,
    required: true,  
    trim: true,  
  },
  ammount:{
    type: Number,
    required: true,
    trim: true,
  },
  });
  
var Consignment = mongoose.model('Consignment', consignmentSchema);
module.exports = Consignment;