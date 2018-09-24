var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
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
    type: Date,
    required: true,
  },
  address: {
    type: String,   
    required: true,  
    trim: true,  
  },  
  account: {
    type: ObjectId(),
    unique: true,
    required: true,  
    trim: true,  
  },
  });
var User = mongoose.model('User', UserSchema);
module.exports = User;