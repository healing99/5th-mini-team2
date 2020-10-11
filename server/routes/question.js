const express = require('express');
const router = express.Router();
const questionMd = require('../model/question');
const is = require('is-0');


router.post('/create', async (req, res, next) => {
  const { examPK, questions } = req.body;
  try {
    if (is.empty(examPK) || is.empty(questions)) throw new Error('필수 파라미터가 없습니다.');
    res.status(201).json(await questionMd.create(examPK, questions));

  } catch (err) {
    res.status(400).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
