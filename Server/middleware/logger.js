const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logDirectory = path.join(__dirname, "..", "logs");

// Create the logs directory if it doesn't exist
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const logEvents = async (message, logFileName) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    await fsPromises.appendFile(path.join(logDirectory, logFileName), logItem);
  } catch (err) {
    console.error("Failed to write log:", err);
  }
};

const logger = (req, res, next) => {
  logEvents(
    `${req.method}\t${req.url}\t${req.headers.origin || "Unknown Origin"}`,
    "reqLog.log"
  );
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = { logEvents, logger };
