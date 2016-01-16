var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var token = new Schema({
  token: {type: String, required: 'Token is required', index: {unique: true}},
  created: {type: Number, default: Date.now},
  userName: String
});

module.exports = mongoose.model('SiteToken', token);