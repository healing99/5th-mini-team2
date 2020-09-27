const express = require('express');
const router = express.Router();
const etcMd = require('../model/etc');
const is = require('is-0');

router.post('/subject/create', async (req, res, next) => {
  const { S_NM } = req.body;
  try {
    if (is.empty(S_NM)) throw new Error('필수 파라미터가 없습니다.');
    res.status(200).json(await etcMd.subjectCreate(S_NM));
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

router.get('/subject/list', async (req, res, next) => {
  try {
    res.status(200).json(await etcMd.subjectList());
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;