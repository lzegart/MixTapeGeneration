const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 5000,
  user: "root",
  password: "",
  database: "",
});

connection.connect();

module.exports = connection;
