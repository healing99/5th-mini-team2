const express = require('express');
const router = express.Router();
const questionMd = require('../model/question');
const is = require('is-0');


router.post('/create', async (req, res, next) => {
  const { examPK, questions } = req.body;
  try {
    if (is.empty(examPK) || is.empty(questions)) throw new Error('필수 파라미터가 없습니다.');
    const parseQUESTIONS = JSON.parse(questions);
    res.status(200).json(await questionMd.create(examPK, parseQUESTIONS));

  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
