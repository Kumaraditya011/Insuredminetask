var mongoose = require('mongoose');
var user = new mongoose.Schema({
    mail:{type: String},
    pwd:{type: String},



});

module.exports = mongoose.model('Register', user);