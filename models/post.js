const mongoose = require('mongoose');

postSchema = new mongoose.Schema({
    // author: {type: String, required: true},
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    content: {type: String, require: true},
    createdAt: {type: Date, default: Date.now},
    status: {type: String, default: 'published'}
});

module.exports = mongoose.model('post', postSchema);