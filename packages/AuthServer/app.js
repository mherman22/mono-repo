require("dotenv").config();
require("./config/database").connect();

const cookieParser = require("cookie-parser");
const cors = require('cors');
const express = require("express");
const corsConfig = require("./config/corsConfig");
const auth = require("./middleware/auth");
const app = express();

//cross origin resource sharing and data transfers between browsers and servers.
app.use(cors(corsConfig));

//form data
app.use(express.urlencoded({extended:false}));

//json data
app.use(express.json());

//cookies
// app.use(cookieParser);

//user authentication routes
app.use("/register", require('./routes/registerRoutes'));
app.use("/login", require('./routes/loginRoutes'));

app.use(auth.authenticateRoute);
app.post("/",(req, res) => {
    res.status(200).json({"message":"just learning jwt implementation in nodejs! Welcome!"})
})

module.exports = app;