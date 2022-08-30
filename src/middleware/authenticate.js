const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const authenticate = async (req, res, next) => {
  try {
    const tokens = await req.cookies.woken;
    if (tokens) {
      const verifyToken = await jwt.verify(tokens, process.env.PRIVATE_KEY);
      const rootUser = await User.findOne({
        _id: verifyToken._id,
        'tokens.token': tokens,
      });

      if (!rootUser) {
        res.status(404).json({ error: 'user is not Found' });
      }

      req.token = tokens;
      req.rootUser = rootUser;
      req.userID = rootUser._id;
      req.user = verifyToken;
    }
    next();
  } catch (error) {
    res.status(401).json({ error: 'User is not  Authorized', status: 401 });
    console.log(error);
  }
};
module.exports = authenticate;
