const express = require('express');
const router = express.Router();
const examMd = require('../model/exam');
const is = require('is-0');

router.post('/create', async (req, res, next) => {
  // 괌고 고유 ID, 시험 이름, 시험 시작일시, 시험 제한 시간
  const { E_S_PK, E_NM, E_STR_DT, E_LIMIT } = req.body;
  const E_REG_U_PK = '';  // 현재 Token 시스템 미 구현으로, 실 서비스 전까지 등록자 PK는 NULL 유지
  try {
    if (is.empty(E_S_PK) || is.empty(E_NM) || is.empty(E_STR_DT) || is.empty(E_LIMIT)) throw new Error('필수 파라미터가 없습니다.');
    res.status(200).json(await examMd.create(E_S_PK, E_NM, E_STR_DT, E_LIMIT, E_REG_U_PK));
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

router.get('/list/:LIMIT', async (req, res, next) => {
  const LIMIT = req.params.LIMIT;  // 조회 제한 숫자
  try {
    res.status(200).json(await examMd.list(LIMIT));
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
