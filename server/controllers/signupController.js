const { User } = require('../models/User.js');

// userIdvaild
module.exports.userIdvaild = (req, res) => {
  const { userId } = req.body;
  console.log(userId);
  //console.log(res);
};

// Signup
const signup = (req, res, next) => {
  const { userId, password, email } = req.body;

  const createdUser = {
    userId,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

exports.signup = signup;
