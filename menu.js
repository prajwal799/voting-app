const mongoose = require('mongoose');

const menu = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
});

const Menu = mongoose.model('Menu', menu);
module.exports = Menu;