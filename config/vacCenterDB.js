const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "terkus45",
  database: "vacCenter",
});

module.exports = connection;
