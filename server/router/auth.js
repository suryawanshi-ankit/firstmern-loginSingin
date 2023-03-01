const express = require('express');
const router = express.Router();
const {User, userValidation} = require('../model/userSchema');
const bcrypt = require('bcryptjs');

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
    return res.status(422).send(user);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).send("Invalid Credientials...");

    user = await User.findOne({email: req.body.email});

    if (!user) return res.status(400).send("Invalid Credientials...");

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const token = await user.generateAuthToken();
      return res.status(201).send({message: 'User signin succesfull', token: token, data: user});
    }
    else
      return res.status(400).send("Invalid Credientials...");

  } catch (err) {
    return res.status(201).send(user);
  }
});

module.exports = router;
