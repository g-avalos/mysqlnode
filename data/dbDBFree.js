const mysql = require("mysql");

// Corexion a db4free.net
const conDBFree = mysql.createConnection({
  host: 'db4free.net',
  user: 'pruebaifts11',
  password: 'pruebaifts11',
  database: 'ifts11'
});

//abre la conexion a mysql en dbfree
conDBFree.connect(error => {
  if (error) throw error;
  console.log("Conexion exitosa DBFree");
});

module.exports = conDBFree;