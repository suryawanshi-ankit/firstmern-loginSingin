const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { string } = require('joi');

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
  date: {
    type: Date,
    default: Date.now()
  },
  messages: [
    {
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
      message: {
        type: String,
        require: true,
      },
    }
  ],
  tokens: [
    {
      token: {
        type: String,
        require: true
      }
    }
  ]
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

userSchema.methods.generateAuthToken = async function() {
  try {
    let token = jwt.sign({_id: this._id}, process.env.SCRET_TOKEN_KEY);
    this.tokens = this.tokens.concat({ token: token});
    await this.save();
    return token;
  } catch (error) {
    console.log('generateAuthToken: ', error);
  }
}

userSchema.methods.addMessage = async function(name, email, phone, message) {
  try {
    this.messages = this.messages.concat({name, email, phone, message});
    const newdata = await this.save();
    return newdata;
  } catch (error) {
    console.log('addmessage: ', error);
  }
}

const User = mongoose.model('USER', userSchema);
exports.User = User;
exports.userValidation = userValidation;
