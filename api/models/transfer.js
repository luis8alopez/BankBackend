const mongoose = require("mongoose");
const transferSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },  
  accountId: {
    type: String,
    required: true,  
    trim: true,  
  },
  accountDestiny:{
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
  
var Transfer = mongoose.model('Transfer', transferSchema);
module.exports = Transfer;