const db = require("../config/dbConn"); // Assuming this is a configured MySQL connection
const bcrypt = require("bcrypt");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async (req, res) => {
  try {
    const [users] = await db.query(
      "SELECT id, username, roles, active FROM users"
    );

    if (!users.length) {
      return res.status(404).json({message: "No users found"});
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({message: "Server error"});
  }
};

// @desc Create new user
// @route POST /users/register
// @access Public
const createNewUser = async (req, res) => {
  try {
    const {username, password, roles} = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({message: "Username and password are required"});
    }

    // Check for duplicate username
    const [duplicate] = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    if (duplicate.length) {
      return res.status(409).json({message: "Duplicate username"});
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10);

    // Create and store new user
    const userRoles =
      roles && Array.isArray(roles) && roles.length
        ? roles.join(",")
        : "Employee";
    const [result] = await db.query(
      "INSERT INTO users (username, password, roles) VALUES (?, ?, ?)",
      [username, hashedPwd, userRoles]
    );

    if (result.affectedRows) {
      res.status(201).json({message: `New user ${username} created`});
    } else {
      res.status(400).json({message: "Invalid user data received"});
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({message: "Server error"});
  }
};

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
  try {
    const {id, username, roles, active, password} = req.body;

    if (
      !id ||
      !username ||
      !Array.isArray(roles) ||
      !roles.length ||
      typeof active !== "boolean"
    ) {
      return res
        .status(400)
        .json({message: "All fields except password are required"});
    }

    // Check if the user exists
    const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (!user.length) {
      return res.status(404).json({message: "User not found"});
    }

    // Check for duplicate username
    const [duplicate] = await db.query(
      "SELECT * FROM users WHERE username = ? AND id != ?",
      [username, id]
    );
    if (duplicate.length) {
      return res.status(409).json({message: "Duplicate username"});
    }

    // Hash new password if provided
    let hashedPwd = user[0].password;
    if (password) {
      hashedPwd = await bcrypt.hash(password, 10);
    }

    // Update user
    const [result] = await db.query(
      "UPDATE users SET username = ?, roles = ?, active = ?, password = ? WHERE id = ?",
      [username, roles.join(","), active, hashedPwd, id]
    );

    if (result.affectedRows) {
      res.status(200).json({message: `${username} updated`});
    } else {
      res.status(400).json({message: "Failed to update user"});
    }
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({message: "Server error"});
  }
};

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = async (req, res) => {
  try {
    const {id} = req.body;

    if (!id) {
      return res.status(400).json({message: "User ID required"});
    }

    const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (!user.length) {
      return res.status(404).json({message: "User not found"});
    }

    const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
    if (result.affectedRows) {
      res
        .status(200)
        .json({message: `User ${user[0].username} with ID ${id} deleted`});
    } else {
      res.status(400).json({message: "Failed to delete user"});
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({message: "Server error"});
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
