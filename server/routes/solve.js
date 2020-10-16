const express = require('express');
const router = express.Router();
const solveMd = require('../model/solve');
const is = require('is-0');

router.get('/:examPK', async (req, res, next) => {
  const examPK = req.params.examPK;
  try {
    if (is.empty(examPK)) throw new Error('시험 코드가 없습니다.');
    res.status(200).json(await solveMd.solve(examPK));
  } catch (err) {
    res.status(400).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
