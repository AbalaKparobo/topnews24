const mongoose = require('mongoose');

draftSchema = new mongoose.Schema({
    // author: {type: String, required: true},
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    content: {type: String, require: true},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('draft', draftSchema);