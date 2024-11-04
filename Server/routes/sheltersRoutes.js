const express = require("express");
const router = express.Router();
const sheltersController = require("../controllers/sheltersController");
const verifyJWT = require("../middleware/verifyJWT");

// Apply JWT verification middleware to all routes
router.use(verifyJWT);

// Route definitions for shelters
router
  .route("/")
  .get(sheltersController.getAllShelters) // GET all shelters
  .post(sheltersController.createNewShelter) // Create a new shelter
  .patch(sheltersController.updateShelter) // Update an existing shelter
  .delete(sheltersController.deleteShelter); // Delete a shelter

module.exports = router;
