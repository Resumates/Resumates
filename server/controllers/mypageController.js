// // const express = require('express');
// // const User = require('../models/user');
// const { Resumes } = require('../models/resumes');

// exports.mypage = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     console.log('Received userId:', userId);

//     // userId가 유효한 ObjectId인지 확인
//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       return res.status(400).send('Invalid userId format.');
//     }

//     // findOne 사용
//     const resume = await Resumes.findOne({ user_id: mongoose.Types.ObjectId(userId) });
//     console.log('Fetched resume:', resume);

//     if (!resume) {
//       return res.status(404).send('이력서가 존재하지 않습니다.');
//     }

//     res.json(resume);
//   } catch (err) {
//     console.error('서버에러:', err.message);
//     res.status(500).send('서버 내부 오류가 발생했습니다.');
//   }
// };
