const user = require('../models/userLoginDetails');
const OTP = require('../models/OTP');
const details_holder = require("../models/userDetailsUnverfied");
const bcrypt = require('bcrypt')

exports.Login = async (req, res, next) => {

    try {
        const usrnm = await user.find({ email: req.body.email });
        if (usrnm.length === 0) res.send("Unregistered User");
        else {
            let verify = bcrypt.compare(req.body.password, usrnm[0].password, (err, data) => {
                if (err) throw err;
                if (data) {
                    console.log("loggedin");
                    res.send("Love ur Logged in")
                } else {
                    res.send("Please be Sure about the password")
                }
            })
        }


    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }

};
