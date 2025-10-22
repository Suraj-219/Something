const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        miniLength: [3, 'Fullname must be at least 3 characters long'],
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        miniLength: [13, 'Email must be at least 13 characters long'],
    },    
    password: {
        type: String,
        required: true,
        trim : true,
        miniLength: [5, 'Password must be at least 5 characters long'],
    },
    products: {
        type: Array,
        default: []
    },
    picture: String,
    gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);