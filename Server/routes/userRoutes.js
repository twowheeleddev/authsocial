const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Route definitions for user management
router
  .route("/")
  .get(usersController.getAllUsers) // GET all users
  .post(usersController.createNewUser) // Create a new user
  .patch(usersController.updateUser) // Update an existing user
  .delete(usersController.deleteUser); // Delete a user

module.exports = router;
