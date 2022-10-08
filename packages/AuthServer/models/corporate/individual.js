const mongoose = require("mongoose");

const individualSchema = new mongoose.Schema({
    first_name: {
        type: String, 
        default:null,
        required: true
    },
    last_name: {
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
    identification_number: {
        type: String,
        required: true
    },
    tax_identification_number: {
        type: String,
        required: true
    },
    refresh_token: [String]
});

module.exports = mongoose.model("individual", individualSchema);


// ➔First name
// ➔Last name
// ➔Email
// ➔Phone number
// ➔NIN
// ➔Address
// ➔TIN
// ➔NB. Proof of asset ownership will only be required at the point of asset upload.