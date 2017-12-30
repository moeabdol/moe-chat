const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, err => {
  if (err) return console.log(err);
  console.log('Server connected on port 3000');
});
