const express = require('express');
// const User = require('../models/user');
const { Resumes } = require('../models/resumes');

exports.getByIdMyPage = async (req, res) => {
  try {
    const { userId } = req.params;
    const resume = await Resumes.findOne({ user_id: userId });
    console.log(resume);
    if (!resume) {
      return res.status(404).send('이력서가 존재하지 않습니다.');
    }
    res.json(resume);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
