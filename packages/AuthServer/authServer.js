const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const server = http.createServer(app);

const {API_PORT} = process.env;
const port = process.env.PORT || API_PORT;

mongoose.connection.once('open', () => {
    console.log("Connection to database is successful....!");
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});