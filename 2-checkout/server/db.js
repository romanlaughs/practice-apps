const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, session VARCHAR(100), username VARCHAR(25), email VARCHAR(40), password VARCHAR(20), street VARCHAR(30), streettwo VARCHAR(30), city VARCHAR(30), state VARCHAR(20), zipcode INTEGER(6), phone VARCHAR(15), payment VARCHAR(20), exp VARCHAR(5), cvv INTEGER(3), billingzip INTEGER(6))"
     // "CREATE TABLE IF NOT EXISTS address (id INT NOT NULL AUTO_INCREMENT, street VARCHAR(30), streettwo VARCHAR(30), city VARCHAR(30), state VARCHAR(2), zipcode INTEGER(6))"
      // CREATE TABLE IF NOT EXISTS payment (id INT NOT NULL AUTO_INCREMENT, payment INTEGER(20), exp VARCHAR(5), cvv INTEGER(3), billingzip INTEGER(6))"
    )
  )
  .catch((err) => console.log(err));



module.exports = db;
