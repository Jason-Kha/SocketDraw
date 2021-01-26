const { send } = require('process');

const app = require('express')();
const http = require('http').createServer(app);

app.get('/ProjectGamers', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');



    console.log('welcome to project gamers');
});