const allowedCors = [
    'http://localhost:4000',
    'http://localhost:4080'
];

const corsConfig = {
    origin: (origin, callback) => {
        if (allowedCors.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('url has been blocked by cors!'))
        }
    }, 
    optionsSuccessStatus: 200
}

module.exports = {corsConfig, allowedCors};