const express = require('express');
const { mypageController } = require('../controllers/mypageController');
const router = express.Router();

router.get('/api/resumes/:userId', mypageController.getByIdMyPage);

module.exports = router;
