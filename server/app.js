const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn.js');
const PORT = process.env.PORT;

app.use(express.json());
app.use(require('./router/auth'));

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

app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
