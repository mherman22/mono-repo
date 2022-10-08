const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { emit } = require('../models/user');
const { comparePasswords } = require('../password');

const userLogin = async (req,res) => {
    try {
        const {email, password} = req.body;

        if (!(email && password)) {
            res.status(400).send("all inputs are required!");
        }

        const user = await User.findOne({email});

        // bcrypt.compare(password, user.password)
        
        if (user && comparePasswords(password,user.password) ) {

            const token = jwt.sign(
                {"user_id": user._id,"email":user.email,"address":user.address},
                process.env.JWT_SECRET,
                {expiresIn: "5m"}
            );

            const refreshToken = jwt.sign(
                {"_id":user._id, "email":user.email,"address":user.address},
                process.env.REFRESH_JWT_SECRET,
                {expiresIn:"1d"}
            );

            user.refresh_token = refreshToken;
            const result = await user.save();
            console.log(result);
            res.cookie('refresh-jwt-token', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
            res.json({token});
        } else {
            res.status(400).send("wrong username or password");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {userLogin};