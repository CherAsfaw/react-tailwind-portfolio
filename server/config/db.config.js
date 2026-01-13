const mysql2 = require("mysql2/promise");
require('dotenv').config();
//providing the database connection details
const dbConnection = mysql2.createPool({  
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,  
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,  
  connectionLimit: 10, // Optional: Set a connection limit
});

module.exports = dbConnection;
