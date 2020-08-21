const { io } = require('../server');


// Con esto tenemos información sobre la conexión
// y el parámetro client no da información sobre quien se conectó
io.on('connection', (client) => {

    console.log('Usuario conectado');

    // Enviar informción
    client.emit('enviarMensaje', {

        usuario: 'Administador',
        mensaje: 'Bienvenido al la aplicación'

    });

    // Detectar desconexiones
    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);

        // Si viene el usuario
        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!!!'
            });

        }


    });

});

// + f +