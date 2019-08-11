const { Schema, model } = require('mongoose');

const BookSchame = new Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    isbn: { type: String, require: true },
    imagePath: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Book', BookSchame);