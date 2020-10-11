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
/*  현재 미니 프로젝트 단계에서는 아이디 비밀번호 로그인 X, 향후 활용 가능성 있어 남겨둠
router.post('/check', async (req, res, next) => {
  const { userId, userPw } = req.body;  // 유저 ID, 유저 PW
  try {
    if (is.empty(userId) || is.empty(userPw)) throw new Error('필수 파라미터가 없습니다.');
    res.status(200).json(await authMd.check(userId, userPw));
  } catch (err) {
    res.status(400).json({ 'status': 'error', 'msg': err.message });
  }
});
*/
  }
});

module.exports = router;
