const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, require: true},
    // password: {type: String, required: true},
    // role: {type: String, required: true}
});

module.exports = mongoose.model('user', userSchema);