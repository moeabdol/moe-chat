const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);

app.use(express.static('public'));
app.use(express.static('node_modules'));

io.on('connection', socket => {
  console.log(`connected to ${socket.id}`);

  socket.on('chat', data => io.sockets.emit('chat', data));
  socket.on('typing', data => socket.broadcast.emit('typing', data));
});

http.listen(3000, err => {
  if (err) return console.log(err);
  console.log('Server connected on port 3000');
});
