const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const newUser = async (req,res) => {
    try {
        //get all the inputs
        const {first_name, last_name,email,password,phone_number, identification_number,address} = req.body;

        //validate the inputs
        if (!(email && password && first_name && last_name && identification_number && phone_number && address)) {
           res.status(400).send("all fields are required!");
        }

        //check if user already exists.
        if (await User.findOne({email}).exec()) {
            return res.status(409).json({"message":`user with email address ${email} already exists, please login`});
        }

        //create user in db and encrypt the password as well
        const user = await User.create({
            first_name,
            last_name,
            email:email.toLowerCase(),
            identification_number,
            address,
            phone_number,
            password: await bcrypt.hash(password,10),
        });

        const token = jwt.sign({user_id:user._id, email,phone_number},process.env.JWT_SECRET,{expiresIn: "2h"});

        //save user token
        user.token =token;

        //return the newly created user
        res.status(201).json(user);
    } catch (error) {
        console.log(error); 
    }
}

module.exports = {newUser};