var socket = io();

// Preguntamos si estamos conectados con servidor
// Con ello si se cae el servidor el cliente intenta reconectar
// on - escuchar
socket.on('connect', function() {

    console.log('Conectado al servidor');

});
// Con esto obtenemos información de las desconexiones
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Luis',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});


// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor: ', mensaje);

});