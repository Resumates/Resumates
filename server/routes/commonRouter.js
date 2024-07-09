var router = require('express').Router();
const { commonController } = require('../controllers');

// 메인 페이지
router.get('/', commonController.main);
// 인트로 페이지
router.get('/intro', commonController.intro);
// 템플릿 목록
router.get('/list', commonController.templateList);
// 유저 데이터
router.get('/user/account/:userId', commonController.userInfo);
// 이력서 작성
router.get('/resume', commonController.writeResume);
// 이력서 상세
router.get('/resume/:resumeId', commonController.detailResume);
// 마이페이지
router.get('/user/resume/:userId', commonController.mypage);
// 마이페이지
//router.get('/resume/:userId', mypageController.getByIdMyPage);

module.exports = router;
