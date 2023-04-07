const user = require('../models/userLoginDetails');
const OTP = require('../models/OTP');
const bcrypt = require('bcrypt')
const details_holder = require('../models/userDetailsUnverfied');

var flag = 1;

exports.verifyOtp = (req, res, next) => {
    var otp_entered = req.body.otp;
    var email = req.body.email;
    findOtp(otp_entered, email);

    if (flag === 0) res.send("Invalid OTP");
    else res.send("OTP successfully verfied");
}

findOtp = async (otp_entered, email) => {
    var Otp_in_Db = await OTP.find({ email: email });
    var storedCreds = await details_holder.find({ email: email });
    console.log(storedCreds);
    await bcrypt.compare(otp_entered, Otp_in_Db[0].otp, (err, result) => {
        if (err) throw err;
        if (result) {
            var user_cred = new user({
                email: storedCreds[0].email,
                password: storedCreds[0].password
            })

            user_cred.save()
                .then(() => {
                    console.log("Success");
                }).catch((err) => {
                    console.log(err);
                })
        } else {
            flag = 0;
        }
    })
}


