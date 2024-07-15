const server = 'http://localhost:4000';
const socket = io(server);

/** reeive message */
socket.on('server.to.client', function (data) {
    document.body.innerHTML += data.message;
});

/** send message */
socket.emit('client.to.server', {
    message: 'testmessage',
    email: 'client',
});