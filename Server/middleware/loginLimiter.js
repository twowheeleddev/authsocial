const rateLimit = require("express-rate-limit");
const { logEvents } = require("./logger");

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 login requests per `window` per minute
  message: {
    message:
      "Too many login attempts from this IP, please try again after a 60 second pause",
  },
  handler: (req, res, next, options) => {
    // Log the rate limit event to a file
    logEvents(
      `Too Many Requests: ${options.message.message}\t${req.method}\t${
        req.url
      }\t${req.headers.origin || "Unknown Origin"}`,
      "errLog.log"
    );

    // Respond with the specified status and message
    res.status(options.statusCode).json(options.message);
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skipSuccessfulRequests: false, // Optionally, set to `true` if successful requests should not be counted against the rate limit
});

module.exports = loginLimiter;
