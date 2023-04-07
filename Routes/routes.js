const express = require('express');
const { Signup } = require('../conrollers/Signup');
const { verifyOtp } = require('../conrollers/Verify');
const { Login } = require('../conrollers/Login')

const router = express.Router();

router
    .route('/Signup')
    .post(Signup)

router.route('/Verify')
    .post(verifyOtp)

router.route('/Login')
    .post(Login)
    .get((req, res) => { res.send("Abhi ruk na") });

module.exports = router;