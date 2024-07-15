const express = require('express');
const http = require("http");
const socketIO = require("socket.io")

const app = express();

/** define static paths */
const path = require('path');
app.use('/', express.static(path.join(__dirname, 'client')))


/** Create server */
let server = http.Server(app);

/** set port and make server listen */
let port = 4000;
server.listen(port);

/** message on which port the server is running */
console.log(`server running on port ${port}!`)

/** set socket.io server and CORS */
let io = socketIO(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

/** open socket.io connection */
io.on('connection', function (socket) {
    /** socket.io on and emit */
    socket.on('client.to.server', function (data) {
        io.emit('server.to.client', data);
    });
});