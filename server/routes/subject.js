const express = require('express');
const router = express.Router();
const subjectMd = require('../model/subject');
const is = require('is-0');

router.post('/create', async (req, res, next) => {
  const { subjectName } = req.body;
  try {
    if (is.empty(subjectName)) throw new Error('필수 파라미터가 없습니다.');
    res.status(200).json(await subjectMd.subjectCreate(subjectName));

  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

router.get('/list', async (req, res, next) => {
  try {
    res.status(200).json(await subjectMd.subjectList());
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;