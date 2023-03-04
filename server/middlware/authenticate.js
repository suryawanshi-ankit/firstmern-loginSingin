const {User} = require('../model/userSchema');
const jwt = require('jsonwebtoken');

const authenticate = async(req, res, next) => {
  try {
    const token = req.header('Autth-token');
    const verifyToken = jwt.verify(token, process.env.SCRET_TOKEN_KEY);

    const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token": token});

    if(!rootUser) { throw new Error("User not Fount")}
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();

  } catch (error) {
    res.status(401).send('Unauthorized User, No token Provided!!!');
    console.log(error);
  }
};

module.exports = authenticate;
