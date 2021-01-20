const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 5000,
  user: "root",
  password: "",
  database: "MTG_db",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
