const { logEvents } = require("./logger");

const errorHandler = (err, req, res, next) => {
  // Log the error details to a log file
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${
      req.headers.origin || "Unknown Origin"
    }`,
    "errLog.log"
  );

  // Log the stack trace to the console for debugging purposes
  console.error(err.stack);

  // Determine the status code, defaulting to 500 if not set
  const status =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  // Set the response status
  res.status(status);

  // Send a JSON response with the error message
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Only show stack in non-production environments
  });
};

module.exports = errorHandler;
