const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);

app.use(express.static('public'));
app.use(express.static('node_modules'));

io.on('connection', socket => {
  console.log(`connected to ${socket.id}`);
  // console.log(socket);
});

http.listen(3000, err => {
  if (err) return console.log(err);
  console.log('Server connected on port 3000');
});
