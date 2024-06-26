var router = require('express').Router();
const { commonController } = require('../controllers');

// 메인 페이지
router.get('/', commonController.main);
// 인트로 페이지
router.get('/intro', commonController.intro);
// 템플릿 목록
router.get('/list', commonController.templateList);
// 이력서 작성
router.get('/resume', commonController.writeResume);
// 마이페이지
router.get('/mypage', commonController.mypage);

module.exports = router;
