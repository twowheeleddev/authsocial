const mysql = require("mysql2/promise");

const dbConn = async () => {
  try {
    // Create a connection pool for better performance
    const connection = await mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "Password",
      database: process.env.DB_NAME || "db_social_shelters",
      port: process.env.DB_PORT || 3306,
      connectionLimit: 10, // Adjust the limit based on your needs
    });

    console.log("Connected to the MySQL database.");

    // Test the connection
    await connection.query("SELECT 1");

    return connection; // Return the pool for use in other parts of the app
  } catch (err) {
    console.error("Error connecting to the MySQL database:", err.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = dbConn;
