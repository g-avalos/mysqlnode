const express = require("express");
const bodyParser = require('body-parser');
const conDb4free = require("./data/dbDBFree");
const conRemote = require("./data/dbRemote");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/db4free', (request, response) => {
	conDb4free.query("select * from datos", (err, result, fields) => {
		// Si hay error
		if (err) throw err;

		// Ok va respuesta a la consola tambien 
		console.log(result);
		response.send(result); 
	});
});

app.get('/remote', (request, response) => {
	conRemote.query("select * from datos", (err, result, fields) => {
		// Si hay error
		if (err) throw err;

		// Ok va respuesta a la consola tambien 
		console.log(result);
		response.send(result); 
	});
});

app.listen(5001, () => {
 console.log("El servidor está inicializado en el puerto 5001");
});
