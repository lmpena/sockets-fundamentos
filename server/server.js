const express = require('express');

// añadimos
// + i + 
const socketIO = require('socket.io');

// servidor por defecto que tiene nodem no requiere instalación
const http = require('http');

const path = require('path');
// + f + 

const app = express();

// + i + 
// definimos servidor para correr la aplicacióm
// express está basado en http, express invoca a funciones de http
// le pasamos app que es el espress por parámetro
let server = http.createServer(app);
// + f + 

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicación del backend
// + i + 
// Inicioalizamos el socket.io
module.exports.io = socketIO(server);
require('./sockets/socket')


// + i + 
//app.listen(port, (err) => {
server.listen(port, (err) => {
    // + f + 

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});