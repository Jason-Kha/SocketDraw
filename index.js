const express = require('express');
const app = express();
const socketio = require('socket.io');

// run express server on port 3000
const expressServer = app.listen(3000);

// set up static webpage
app.use(express.static(__dirname + '/public'));

// socket.io setup
const io = socketio(expressServer);

// on user connection
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
