var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    autor: {
        type: String,
        required: true
    },
    blog: {
        type: String,
        required: true,
        lowercase: true
    }
});