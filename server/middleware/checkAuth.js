const jwt = require('jsonwebtoken');


const HttpError = require('../models/http-error');

module.exports = (res, req, next) => {
// if(req.method ==='OPTIONS'){
//     return next();
// }
  try {
    const token = req.headers.authorization.split('')[1];
    if (!token) {
      throw new HttpError('Authentication failed');
    }
    const decodedToken = jwt.verify(token,'supersecret_dont_share')
    req.userData = {userId: decodedToken.userId};
    next();
  } catch (err) {
    const eroor = new HttpError('Authentication failed', 401);
    return next(error);
  }
};
