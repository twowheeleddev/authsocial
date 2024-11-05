require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const path = require("path");
const {logger, logEvents} = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const usersController = require("./controllers/usersController");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn"); // MySQL connection
const createTables = require("./createTables"); // Ensuring tables are created
const PORT = process.env.PORT || 8080;

console.log(`Environment: ${process.env.NODE_ENV}`);

// Connect to MySQL and ensure tables are created
(async () => {
  try {
    await connectDB(); // Connect to the MySQL database
    console.log("Connected to MySQL");

    // Ensure necessary tables are created
    await createTables();
    console.log("Database tables ensured.");

    // Middleware setup
    app.use(logger);
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(cookieParser());

    // Serve static files from the 'public' directory
    app.use("/", express.static(path.join(__dirname, "public")));

    // Route setup
    app.use("/", require("./routes/root"));
    app.use("/register", usersController.createNewUser);
    app.use("/auth", require("./routes/authRoutes"));
    app.use("/users", require("./routes/userRoutes"));
    app.use("/shelters", require("./routes/sheltersRoutes")); // Example for shelters routes

    // Handle 404 errors for undefined routes
    app.all("*", (req, res) => {
      res.status(404);
      if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
      } else if (req.accepts("json")) {
        res.json({message: "404 Not Found"});
      } else {
        res.type("txt").send("404 Not Found");
      }
    });

    // Custom error handler middleware
    app.use(errorHandler);

    // Start the server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Error initializing server:", err.message);
    await logEvents(`Error: ${err.message}`, "dbErrLog.log");
    process.exit(1); // Exit the process with a failure status code
  }
})();
