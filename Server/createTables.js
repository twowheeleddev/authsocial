const mysql = require("mysql2/promise");

// Database connection configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "Password",
  database: "db_social_shelters",
};

// Function to create tables
async function createTables() {
  let connection;
  try {
    // Connect to the database
    connection = await mysql.createConnection(dbConfig);
    console.log("Connected to the database.");

    // Create tables
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(50) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );`;

    const createSheltersTable = `
        CREATE TABLE IF NOT EXISTS shelters (
            shelter_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(100) NOT NULL,
            address VARCHAR(255),
            city VARCHAR(100),
            state VARCHAR(50),
            zip_code VARCHAR(20),
            phone_number VARCHAR(20),
            website_url VARCHAR(255),
            capacity INT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );`;

    // Execute the SQL statements
    await connection.execute(createUsersTable);
    console.log("Users table created or already exists.");

    await connection.execute(createSheltersTable);
    console.log("Shelters table created or already exists.");

    console.log("All tables have been successfully created.");
  } catch (error) {
    console.error("Error creating tables:", error.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log("Database connection closed.");
    }
  }
}

// Run the function
// createTables();

module.exports = createTables;
