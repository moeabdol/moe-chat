$(document).ready(function() {
  var socket = io();
  socket.connect('http://localhost:3000');

  var output = $('#output');
  var handle = $('#handle');
  var message = $('#message');
  var sendBtn = $('#send');

  sendBtn.click(function() {
    socket.emit('chat', {
      message: message.val(),
      handle: handle.val()
    });
  });

  socket.on('chat', function(data) {
    output.append(`<p><strong>${data.handle}:</strong> ${data.message}</p>`);
  });
});
