const db = require("../config/dbConn"); // Assuming this is a configured MySQL connection
const bcrypt = require("bcrypt");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async (req, res) => {
  const [users] = await db.query(
    "SELECT id, username, roles, active FROM users"
  );

  if (!users.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
};

// @desc Create new user
// @route POST /users/register
// @access Public
const createNewUser = async (req, res) => {
  const { username, password, roles } = req.body;

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
    return res.status(409).json({ message: "Duplicate username" });
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10);

  // Create and store new user
  const userRoles =
    roles && Array.isArray(roles) && roles.length
      ? roles.join(",")
      : "Employee";
  const result = await db.query(
    "INSERT INTO users (username, password, roles) VALUES (?, ?, ?)",
    [username, hashedPwd, userRoles]
  );

  if (result[0].affectedRows) {
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
};

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
  const { id, username, roles, active, password } = req.body;

  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== "boolean"
  ) {
    return res
      .status(400)
      .json({ message: "All fields except password are required" });
  }

  // Check if the user exists
  const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  if (!user.length) {
    return res.status(400).json({ message: "User not found" });
  }

  // Check for duplicate username
  const [duplicate] = await db.query(
    "SELECT * FROM users WHERE username = ? AND id != ?",
    [username, id]
  );
  if (duplicate.length) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  // Hash new password if provided
  let hashedPwd = user[0].password;
  if (password) {
    hashedPwd = await bcrypt.hash(password, 10);
  }

  // Update user
  const result = await db.query(
    "UPDATE users SET username = ?, roles = ?, active = ?, password = ? WHERE id = ?",
    [username, roles.join(","), active, hashedPwd, id]
  );

  if (result[0].affectedRows) {
    res.json({ message: `${username} updated` });
  } else {
    res.status(400).json({ message: "Failed to update user" });
  }
};

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID required" });
  }

  const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  if (!user.length) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await db.query("DELETE FROM users WHERE id = ?", [id]);
  if (result[0].affectedRows) {
    const reply = `Username ${user[0].username} with ID ${id} deleted`;
    res.json(reply);
  } else {
    res.status(400).json({ message: "Failed to delete user" });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
