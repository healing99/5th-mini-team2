const express = require('express');
const router = express.Router();
const questionMd = require('../model/question');
const is = require('is-0');
const ArrayExt = require('../utils/ArrayExt');

router.post('/create', async (req, res, next) => {
  const { E_PK, QUESTIONS } = req.body;
  try {
    if (is.empty(E_PK) || is.empty(QUESTIONS)) throw new Error('필수 파라미터가 없습니다.');
    const parseQUESTIONS = JSON.parse(QUESTIONS);
    res.status(200).json(await questionMd.create(E_PK, parseQUESTIONS));
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
