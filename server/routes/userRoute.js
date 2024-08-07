const express = require('express'); // 한개 이상의 파일에서 express가 필요한 경우에는  express패키지에서 무언가를 사용하는 모든 파일에서 불러와야한다

const { check } = require('express-validator');

//express에서 무엇이 필요한가?
const router = express.Router();

const usersControllers = require('../controllers/usersController');
const mypageController = require('../controllers/mypageController');

router.post('/login', usersControllers.login);
router.post('/useridvaild', usersControllers.useridvaild);
router.post('/emailvalid', usersControllers.emailvalid);
router.post('/sendmail', usersControllers.sendmail);
router.post('/signup', usersControllers.signup);
router.post('/userpwvaild', usersControllers.userpwvaild);
router.post('/emailreset', usersControllers.emailreset);
router.post('/passwordreset', usersControllers.passwordreset);
router.delete('/delete/:userId', usersControllers.deleteUser);

module.exports = router;
