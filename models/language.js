const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema(
    {
        value: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        slug: {
            type: String,
            unique: true, 
            index: true
        }
    },
    { timestamp: true }
);

module.exports = mongoose.model('Language', languageSchema);