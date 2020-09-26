const express = require('express');
const router = express.Router();

const mainMd = require('../model/main.js');

router.get('/', async (req, res, next) => {
  try {
    res.status(200).json(await mainMd.test());
  } catch (err) {
    res.status(404).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
