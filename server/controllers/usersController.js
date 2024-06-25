const HttpError = require('../models/http-error');

const DUMMY_USERS = [
  {
    userId: 'test',
    password: 'testers',
    email: 'tester@tester.com',
  },
];
  
// Get Users
const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
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

// Login
const login = (req, res, next) => {
  const { userId, password } = req.body;
  const identifiedUser = DUMMY_USERS.find((u) => u.userId === userId);

  if (!identifiedUser || identifiedUser.password !== password) {
    return next(new HttpError('Could not identify user', 401));
  }

  res.json({ message: 'Login successful!' });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
