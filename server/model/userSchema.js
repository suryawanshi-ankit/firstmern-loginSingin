const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  work: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cPassword: {
    type: String,
    require: true,
  },
});


const userValidation = (user) => {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
    work: Joi.string().required(),
    password: Joi.string().required(),
    cPassword: Joi.string().required(),
  };
  return Joi.validate(user, schema);
}

userSchema.pre('save', async function(next) {
  if(this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.cPassword = await bcrypt.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model('USER', userSchema);
exports.User = User;
exports.userValidation = userValidation;
