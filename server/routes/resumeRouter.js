var router = require('express').Router();
const { resumeController } = require('../controllers');

// 이력서 작성
router.post('/', resumeController.insertResume);
// 이력서 수정
router.put('/edit/:resumeId', resumeController.editResume);
// 이력서 삭제
router.delete('/delete/:resumeId', resumeController.deleteResume);

module.exports = router;
