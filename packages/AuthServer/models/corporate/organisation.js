const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
    name: {
        type: String, 
        default:null,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:true,
        lowercase: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    license: {
        type: String,
        required: true
    },
    tax_identification_number: {
        type: String,
        required: true
    },

    refresh_token: [String]
});

module.exports = mongoose.model("organization", organizationSchema);