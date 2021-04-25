const mysql = require("mysql");

// Corexion a db4free.net
const connection = mysql.createPool({
  host: 'db4free.net',
  user: 'pruebaifts11',
  password: 'pruebaifts11',
  database: 'ifts11'
});

module.exports =  connection;