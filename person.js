const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    }
});

const Person = mongoose.model('Person', blogSchema);

module.exports = Person;