// Request logger middleware to log incoming requests
const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
    next();
};

module.exports = requestLogger;
