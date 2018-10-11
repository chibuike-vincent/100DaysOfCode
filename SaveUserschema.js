const mongoose = require('mongoose');

const UserID = new mongoose.Schema({
  'username': String,
  'email': { type:String,
    unique: true },
  'password': { type: String,
    unique: true }
  
});
const saveUserID = mongoose.model('UserID', UserID);
module.exports = {
  saveUserID
 
};