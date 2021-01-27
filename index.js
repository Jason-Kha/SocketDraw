const express = require('express');
const app = express();
const socketio = require('socket.io');

const config = require('config');

// run express server on port 3000
const expressServer = app.listen(3000);

// set up static webpage
app.use(express.static(__dirname + '/public'));

// socket.io setup
const io = socketio(expressServer);

// on socket connection
io.on('connection', (socket) => {
    console.log('a user connected');

    // on user disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // on chat message
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});
