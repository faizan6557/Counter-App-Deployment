const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
  counter++;
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/counter', (req, res) => {
  res.json({ counter });
});

app.listen(port, () => {
  console.log(`Counter app listening at http://localhost:${port}`);
});
