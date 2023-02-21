const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world from Router file');
});

router.post('/register', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
