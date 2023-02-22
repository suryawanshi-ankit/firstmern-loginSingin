const express = require('express');
const router = express.Router();
const {User, userValidation} = require('../model/userSchema');

router.get('/', (req, res) => {
  res.send('Hello world from Router file');
});

router.post('/register', async (req, res) => {
  try {
    const { error } = userValidation(req.body);
    if (error) return res.status(422).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if (user) return res.status(422).send("allready exists this email");

    if(req.body.password !== req.body.cPassword) return res.status(422).send("password & confirm password is different!!!");

    user = new User(req.body);
    user = await user.save();
    if (user) return res.status(201).send(user);

  } catch (err) {
    return res.status(201).send(user);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send("Please fill the data");

    user = await User.findOne({email: req.body.email});
    if (user.password === password)
      return res.status(201).send(user);
    else
      return res.status(400).send("Invalid User...");

  } catch (err) {
    return res.status(201).send(user);
  }
});

module.exports = router;
