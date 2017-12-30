$(document).ready(function() {
  var socket = io();
  socket.connect('http://localhost:3000');

  var output   = $('#output');
  var feedback = $('#feedback');
  var handle   = $('#handle');
  var message  = $('#message');
  var sendBtn  = $('#send');

  sendBtn.click(function() {
    socket.emit('chat', {
      message: message.val(),
      handle: handle.val()
    });
  });

  message.keypress(function() {
    socket.emit('typing', handle.val());
  });

  socket.on('chat', function(data) {
    feedback.html('');
    output.append(`<p><strong>${data.handle}:</strong> ${data.message}</p>`);
  });

  socket.on('typing', function(data) {
    feedback.html(`<p><em>${data} is typing a message...</em></p>`);
  });
});
