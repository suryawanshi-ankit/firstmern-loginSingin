const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world from server');
});

app.get('/about', (req, res) => {
  res.send('Hello about world from server');
});

app.get('/contact', (req, res) => {
  res.send('Hello contact world from server');
});

app.get('/signin', (req, res) => {
  res.send('Hello signin world from server');
});

app.get('/signup', (req, res) => {
  res.send('Hello signup world from server');
});

app.listen(3000, () => console.log('server is running at port 3000'));
