// change this to correct ip later
const socket = io('localhost:3000');

// retrieve username
var username = null;

// handle empty/null usernames
while (username === '' || username === null) {
    var username = prompt('Please enter your name');
}

socket.emit('newUser', username);

// on connection to server
socket.on('connect', () => {
    console.log(`socket: ${socket.id}`);
});

// on chat message
socket.on('chat message', (msg) => {
    // create listed item with message
    var item = document.createElement('tr');
    item.innerHTML = `<td>${msg.name}: ${msg.msg}</td>`;

    messages.appendChild(item);

    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('server message', (msg) => {
    // create listed item with message
    var item = document.createElement('tr');
    item.innerHTML = `<td>${msg}</td>`;

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
        socket.emit('chat message', {
            msg: {
                name: username,
                msg: input.value
            }
        });
        input.value = '';
    }
});
