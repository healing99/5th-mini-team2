const express = require('express');
const router = express.Router();

const authMd = require('../model/auth.js');

router.post('/register/:Gr', async (req, res, next) => {
  const Gr = req.params.Gr;  // 유저 그룹
  const userId = req.body.userId;  // 유저 ID
  const userPw = req.body.userPw;  // 유저 PW
  try {
    res.status(200).json(await authMd.register(userId, userPw, Gr));
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

router.post('/check', async (req, res, next) => {
  const userId = req.body.userId;  // 유저 ID
  const userPw = req.body.userPw;  // 유저 PW
  try {
    res.status(200).json(await authMd.check(userId, userPw));
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
