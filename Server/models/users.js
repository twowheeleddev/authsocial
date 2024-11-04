const db = require("../config/dbConn"); // Assuming this is your MySQL connection
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const [users] = await db.query(
    "SELECT id, username, roles, active FROM users"
  );

  if (!users.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
});

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  // Confirm data
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // Check for duplicate username
  const [duplicate] = await db.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  if (duplicate.length) {
    return res.status(409).json({ message: "Username already exists" });
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10); // Salt rounds

  const rolesString = Array.isArray(roles) ? roles.join(",") : "Employee";

  // Create new user
  const result = await db.query(
    "INSERT INTO users (username, password, roles) VALUES (?, ?, ?)",
    [username, hashedPwd, rolesString]
  );

  if (result[0].affectedRows) {
    res
      .status(201)
      .json({ message: `User '${username}' created successfully` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, roles, active, password } = req.body;

  if (!id || !username || typeof active !== "boolean") {
    return res
      .status(400)
      .json({ message: "ID, username, and active status are required" });
  }

  const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  if (!user.length) {
    return res.status(400).json({ message: "User not found" });
  }

  const rolesString = Array.isArray(roles) ? roles.join(",") : user[0].roles;
  let hashedPwd = user[0].password;

  if (password) {
    hashedPwd = await bcrypt.hash(password, 10); // Salt rounds
  }

  const result = await db.query(
    "UPDATE users SET username = ?, password = ?, roles = ?, active = ? WHERE id = ?",
    [username, hashedPwd, rolesString, active, id]
  );

  if (result[0].affectedRows) {
    res.json({ message: `User '${username}' updated successfully` });
  } else {
    res.status(400).json({ message: "Failed to update user" });
  }
});

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  if (!user.length) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await db.query("DELETE FROM users WHERE id = ?", [id]);

  if (result[0].affectedRows) {
    res.json({ message: `User with ID ${id} deleted successfully` });
  } else {
    res.status(400).json({ message: "Failed to delete user" });
  }
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
