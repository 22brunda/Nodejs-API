var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: {
    type: String,
    required: 'Please enter the firstname'
  },
  lastname: {
    type: String,
    required: 'Please enter the lastname'
  },
  email: {
    type: String,
    required: 'Please enter emailId'
  },
  password: {
    type: String,
    required: 'Please enter the password'
  },
  confirm_pass: {
    type: String,
    required: 'Please enter confirm password'
  }, 
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserInfo', UserSchema);