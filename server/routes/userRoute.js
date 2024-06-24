const express = require('express'); // 한개 이상의 파일에서 express가 필요한 경우에는  express패키지에서 무언가를 사용하는 모든 파일에서 불러와야한다

//express에서 무엇이 필요한가?
const router = express.Router();

const usersControllers = require('../controllers/usersController');

router.get('/', usersControllers.getUsers);

router.post('/signup', usersControllers.signup);

router.post('/login', usersControllers.login);

module.exports = router;
