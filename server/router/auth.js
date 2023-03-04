const express = require('express');
const router = express.Router();
const {User, userValidation} = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const authenticate = require('../middlware/authenticate');

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
      return res.status(200).send({message: 'User signin succesfull', token: token, data: user});
    }
    else
      return res.status(400).send("Invalid Credientials...");

  } catch (err) {
    return res.status(201).send(err);
  }
});

router.get('/about', authenticate, (req, res) => {
  res.status(200).send(req.rootUser);
});

router.get('/getData', authenticate, (req, res) => {
  res.status(200).send(req.rootUser);
});

router.post('/contact', authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name && !email && !phone && !message)
      return res.json({error: "Contact form info is not filled"});

    const userContact = await User.findOne({_id: req.userId});

    if (userContact) {
      const userMessage = await userContact.addMessage(name, email, phone, message);
      res.status(201).send(userMessage);
    }


  } catch (error) {
    return res.status(201).send(error);
  }
});

module.exports = router;
