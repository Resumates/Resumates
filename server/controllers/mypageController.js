const express = require('express');
const { User } = require('../models/user');
const { Resumes } = require('../models/resumes');

exports.mypageController = {
  // 마이페이지
  async getByIdMyPage(req, res) {
    try {
      const { userId } = req.params;
      const resume = await Resumes.findOne({ user_id: userId });
      if (!resume) {
        return res.status(404).send('Resume not found');
      }
      res.json(resume);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
