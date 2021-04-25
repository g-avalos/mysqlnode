const mysql = require("mysql");

// Corexion a remotemysql.com
const conRemoteMySql = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'VPqGVTosnM',
  password: '3vepF0QPkC',
  database: 'VPqGVTosnM'
});

//abre la conexion a mysql 
conRemoteMySql.connect(error => {
  if (error) throw error;
  console.log("Conexion exitosa Remote");
});

module.exports = conRemoteMySql;