const mongoose = require("mongoose");
const retireSchema = new mongoose.Schema({
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
  
var Retire = mongoose.model('Retire', retireSchema);
module.exports = Retire;