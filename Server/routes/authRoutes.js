const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const loginLimiter = require("../middleware/loginLimiter");

// Route: POST /auth
// Description: Handles user login with rate limiting
router.route("/").post(loginLimiter, authController.login);

// Route: GET /auth/refresh
// Description: Refreshes the user authentication token
router.route("/refresh").get(authController.refresh);

// Route: POST /auth/logout
// Description: Handles user logout
router.route("/logout").post(authController.logout);

module.exports = router;
