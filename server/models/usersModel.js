// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Uname: {
        type: String,
        required: true
    },
    Pwd: {
        type: String,
        required: true
    },
    Gmail: {
        type: String,
        required: true,
        unique: true
    },
    Address: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    Cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
