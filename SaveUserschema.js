const mongoose = require('mongoose');

const UserID = new mongoose.Schema({
  'username': String,
  'email': String,
  'password': String,
  
});
const saveUserID = mongoose.model('UserID', UserID);
module.exports = {
  saveUserID
 
};