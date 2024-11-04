const db = require("../config/dbConn"); // Assuming this is your MySQL connection
const asyncHandler = require("express-async-handler");

// @desc Get all shelters
// @route GET /shelters
// @access Private
const getAllShelters = asyncHandler(async (req, res) => {
  const [shelters] = await db.query("SELECT * FROM shelters");

  if (!shelters.length) {
    return res.status(400).json({ message: "No shelters found" });
  }

  res.json(shelters);
});

// @desc Create new shelter
// @route POST /shelters
// @access Private
const createNewShelter = asyncHandler(async (req, res) => {
  const { name, location, capacity, description } = req.body;

  // Confirm data
  if (!name || !location || !capacity) {
    return res
      .status(400)
      .json({ message: "All fields except description are required" });
  }

  const result = await db.query(
    "INSERT INTO shelters (name, location, capacity, description) VALUES (?, ?, ?, ?)",
    [name, location, capacity, description || null]
  );

  if (result[0].affectedRows) {
    res.status(201).json({ message: `Shelter '${name}' created successfully` });
  } else {
    res.status(400).json({ message: "Invalid shelter data received" });
  }
});

// @desc Update a shelter
// @route PATCH /shelters
// @access Private
const updateShelter = asyncHandler(async (req, res) => {
  const { id, name, location, capacity, description } = req.body;

  if (!id || !name || !location || !capacity) {
    return res
      .status(400)
      .json({ message: "All fields except description are required" });
  }

  const [shelter] = await db.query("SELECT * FROM shelters WHERE id = ?", [id]);
  if (!shelter.length) {
    return res.status(400).json({ message: "Shelter not found" });
  }

  const result = await db.query(
    "UPDATE shelters SET name = ?, location = ?, capacity = ?, description = ? WHERE id = ?",
    [name, location, capacity, description || null, id]
  );

  if (result[0].affectedRows) {
    res.json({ message: `Shelter '${name}' updated successfully` });
  } else {
    res.status(400).json({ message: "Failed to update shelter" });
  }
});

// @desc Delete a shelter
// @route DELETE /shelters
// @access Private
const deleteShelter = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Shelter ID is required" });
  }

  const [shelter] = await db.query("SELECT * FROM shelters WHERE id = ?", [id]);
  if (!shelter.length) {
    return res.status(400).json({ message: "Shelter not found" });
  }

  const result = await db.query("DELETE FROM shelters WHERE id = ?", [id]);

  if (result[0].affectedRows) {
    res.json({ message: `Shelter with ID ${id} deleted successfully` });
  } else {
    res.status(400).json({ message: "Failed to delete shelter" });
  }
});

module.exports = {
  getAllShelters,
  createNewShelter,
  updateShelter,
  deleteShelter,
};
