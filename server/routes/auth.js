const express = require('express');
const router = express.Router();
const authMd = require('../model/auth');
const is = require('is-0');

router.post('/register/:Gr', async (req, res, next) => {
  const Gr = req.params.Gr;
  const { userId, userPw } = req.body;  //유저 그룹, 유저 ID, 유저 PW
  try {
    if (is.empty(userId) || is.empty(userPw)) throw new Error('필수 파라미터가 없습니다.');
    res.status(201).json(await authMd.register(userId, userPw, Gr));
  } catch (err) {
    res.status(400).json({ 'status': 'error', 'msg': err.message });
  }
});

router.post('/check', async (req, res, next) => {
  const { userId, userPw } = req.body;  // 유저 ID, 유저 PW
  try {
    if (is.empty(userId) || is.empty(userPw)) throw new Error('필수 파라미터가 없습니다.');
    res.status(200).json(await authMd.check(userId, userPw));
  } catch (err) {
    res.status(400).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
