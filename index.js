const express = require("express");
const bodyParser = require('body-parser');
const UsuarioDaoReq = require("./dao/usuarioDao");

let usuarioDao = new UsuarioDaoReq()
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/db4free', (request, response) => {
	usuarioDao.getDB4(request, response); 
});

app.get('/remote', (request, response) => {
	usuarioDao.getRemote(request, response); 
});

app.get('/usuario', (request, response) => {
	usuarioDao.getUsuario(request, response); 
});

app.listen(process.env.PORT || 5001, () => {
 console.log("El servidor está inicializado en el puerto 5001");
});
