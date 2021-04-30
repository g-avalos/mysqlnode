const { response } = require("express");
const conDb4free = require("../data/dbDBFree");
const conRemote = require("../data/dbRemote");
const Usuario = require("../model/Usuario");

class UsuarioDao {
    constructor() {}

    getDB4(req, res) {
        conDb4free.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
            
            connection.query("select * from datos", (err, result, fields) => {
                // Si hay error
                if (err) throw err;

                // Ok va respuesta a la consola tambien 
                console.log(result);
                res.json(result); 
            });
        });
    }

    getUsuario(req, res) {
        conRemote.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
            
            connection.query("select * from usuarios ", (err, result, fields) => {
                // Si hay error
                if (err) throw err;
                                
                let u = new Usuario(result[0].id, result[0].nombre, result[0].password);

                // Ok va respuesta a la consola tambien 
                console.log(u);
                res.json(u); 
            });
        });
    }

    getRemote(req, res) {
        conRemote.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
            
            connection.query("select * from datos", (err, result, fields) => {
                // Si hay error
                if (err) throw err;

                // Ok va respuesta a la consola tambien 
                console.log(result);
                res.json(result); 
            });
        });
    }
}

module.exports = UsuarioDao;