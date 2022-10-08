const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hash(password,10);

const comparePasswords = (password, hashedPassword) => {
    //check if both passwords are provided
    if (!password || !hashedPassword) {
        return Promise.resolve(false);
    }
    //compare if they match
    return bcrypt.compare(password, hashedPassword);
}

module.exports = 
{
    hashPassword,
    comparePasswords
};

