// change this to correct ip later
const socket = io('http://localhost:3000');

// on connection to server
socket.on('connect', () => {
    console.log(`socket: ${socket.id}`);
});

// on chat message
socket.on('chat message', (msg) => {
    // create listed item with message
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

// set up chat by getting id's
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function (e) {
    // don't refresh screen
    e.preventDefault();

    // emit chat message to server
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});
