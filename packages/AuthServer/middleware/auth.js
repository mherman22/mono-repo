const jwt = require("jsonwebtoken");
const config = process.env;

const authenticateRoute = (req, res, next) => {
    const header = req.headers['authorization'];
    if (!header) return res.sendStatus(401);
    console.log(header);

    const token = header.split(' ')[1];

    jwt.verify(token,
        config.JWT_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.email;
            next();
        }
    )
}

module.exports = {authenticateRoute};