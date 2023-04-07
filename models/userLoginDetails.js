const mongoose = require('mongoose');

const LSschema = new mongoose.Schema({

    email: {
        type: String,
        // required: [true, 'please enter your username'],
        unique: true
    },

    password: {
        type: String,
        // required: [true, 'Enter a valid password'],
        unique: true
    }

})


module.exports = mongoose.model('userLoginDetails', LSschema);