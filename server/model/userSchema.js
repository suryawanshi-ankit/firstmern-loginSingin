const mongoose = require('mongoose');
const Joi = require('joi');

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

const User = mongoose.model('USER', userSchema);

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

exports.User = User;
exports.userValidation = userValidation;
