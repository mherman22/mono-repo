const mongoose = require("mongoose");
const {MONGO_URL_DB} = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URL_DB, {
        useNewUrlParser:true, 
        useUnifiedTopology: true, 
    }).catch(error => {
        console.log("database connection failed. exiting now...!");
        console.error(error);
        process.exit(1);
    })
}