const mysql = require("mysql");

// Corexion a remotemysql.com
const connection = mysql.createPool({
  host: 'remotemysql.com',
  user: 'VPqGVTosnM',
  password: '3vepF0QPkC',
  database: 'VPqGVTosnM'
});

module.exports = connection;