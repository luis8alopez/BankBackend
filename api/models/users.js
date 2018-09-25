const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  country:{
      type: String,
      required: true,
      trim: true,
  },
  name: {
    type: String,
    required: true,  
    trim: true,  
  },  
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,  
    trim: true,  
  },
  cellphone: {
    type: String,
    unique: true,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  address: {
    type: String,   
    required: true,  
    trim: true,  
  },  
  account: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    required: true,  
    trim: true,  
  },
  balance:{
    type: Number,
  },
  });
  
var User = mongoose.model('User', UserSchema);
module.exports = User;