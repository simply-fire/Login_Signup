const mongoose = require('mongoose');

const OTP = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    otp: {
        type: String,
        // unique: true
    }
})

module.exports = mongoose.model('OTP', OTP);