const user = require('../models/userLoginDetails');
const OTP = require('../models/OTP');
const details_holder = require("../models/userDetailsUnverfied");
const bcrypt = require('bcrypt')

// the user makes the get request to accces the application

exports.Signup = async (req, res, next) => {
    try {

        var email = req.body.email;
        var password_hash = await bcrypt.hash(req.body.password, 10);
        var otp_hash = await generateOtp(email);

        console.log(otp_hash);

        var cred = await user.find({ email: email });

        if (cred.length != 0)
            res.send("This email Id is Already registered");
        else {
            var user_cred = new details_holder({
                email: req.body.email,
                password: password_hash
            })

            user_cred.save()
                .then(() => {
                    console.log("Success");
                }).catch((err) => {
                    console.log(err);
                })
            res.send("Welcome user Now verify your email");
        }

    }

    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
}

generateOtp = async (email) => {

    let otp_value = Math.ceil(Math.random() * 100000);
    if (otp_value < 100000) otp_value += 100000;
    console.log(process.env.saltRounds);
    let otp_hash = await bcrypt.hash(otp_value.toString(), 10);


    var otpCred = new OTP({
        otp: otp_hash,
        email: email
    })

    otpCred.save()
        .then(() => {
            console.log("success");
        }).catch((err) => {
            console.log(err);
            console.log("req failed");
        })

    return otp_value;
}
