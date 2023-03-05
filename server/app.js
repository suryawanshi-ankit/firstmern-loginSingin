const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

dotenv.config({path: './config.env'});
const PORT = process.env.PORT;

app.use(express.json());
app.use(require('./router/auth'));

require('./db/conn.js');
app.get('/', (req, res) => {
  res.send('Hello world from server');
});

app.get('/signup', (req, res) => {
  res.send('Hello signup world from server');
});

app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
