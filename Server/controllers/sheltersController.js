const db = require("../config/dbConn"); // Assuming this is a configured MySQL connection

// @desc Get all shelters
// @route GET /shelters
// @access Private
const getAllShelters = async (req, res) => {
  // Get all shelters from MySQL
  const [shelters] = await db.query("SELECT * FROM shelters");

  // If no shelters found
  if (!shelters.length) {
    return res.status(400).json({ message: "No shelters found" });
  }

  res.json(shelters);
};

// @desc Create new shelter
// @route POST /shelters
// @access Private
const createNewShelter = async (req, res) => {
  const { name, location, capacity } = req.body;

  // Confirm data
  if (!name || !location || !capacity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate shelter name
  const [duplicate] = await db.query("SELECT * FROM shelters WHERE name = ?", [
    name,
  ]);
  if (duplicate.length) {
    return res.status(409).json({ message: "Duplicate shelter name" });
  }

  // Create and store the new shelter
  const result = await db.query(
    "INSERT INTO shelters (name, location, capacity) VALUES (?, ?, ?)",
    [name, location, capacity]
  );

  if (result[0].affectedRows) {
    return res.status(201).json({ message: "New shelter created" });
  } else {
    return res.status(400).json({ message: "Invalid shelter data received" });
  }
};

// @desc Update a shelter
// @route PATCH /shelters
// @access Private
const updateShelter = async (req, res) => {
  const { id, name, location, capacity } = req.body;

  // Confirm data
  if (!id || !name || !location || !capacity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm shelter exists to update
  const [shelter] = await db.query("SELECT * FROM shelters WHERE id = ?", [id]);
  if (!shelter.length) {
    return res.status(400).json({ message: "Shelter not found" });
  }

  // Check for duplicate shelter name
  const [duplicate] = await db.query(
    "SELECT * FROM shelters WHERE name = ? AND id != ?",
    [name, id]
  );
  if (duplicate.length) {
    return res.status(409).json({ message: "Duplicate shelter name" });
  }

  const result = await db.query(
    "UPDATE shelters SET name = ?, location = ?, capacity = ? WHERE id = ?",
    [name, location, capacity, id]
  );

  if (result[0].affectedRows) {
    res.json({ message: `Shelter '${name}' updated` });
  } else {
    res.status(400).json({ message: "Failed to update shelter" });
  }
};

// @desc Delete a shelter
// @route DELETE /shelters
// @access Private
const deleteShelter = async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Shelter ID required" });
  }

  // Confirm shelter exists to delete
  const [shelter] = await db.query("SELECT * FROM shelters WHERE id = ?", [id]);
  if (!shelter.length) {
    return res.status(400).json({ message: "Shelter not found" });
  }

  const result = await db.query("DELETE FROM shelters WHERE id = ?", [id]);

  if (result[0].affectedRows) {
    const reply = `Shelter '${shelter[0].name}' with ID ${id} deleted`;
    res.json(reply);
  } else {
    res.status(400).json({ message: "Failed to delete shelter" });
  }
};

module.exports = {
  getAllShelters,
  createNewShelter,
  updateShelter,
  deleteShelter,
};
