const express = require('express');
const router = express.Router();
const uuid = require('../utils/uuid');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/');
  },
  filename: function (req, file, cb) {
    const imgName = uuid.generateConvert();
    let mimeType;
    switch (file.mimetype) {
      case "image/jpeg":
        mimeType = "jpg";
        break;
      case "image/png":
        mimeType = "png";
        break;
      case "image/gif":
        mimeType = "gif";
        break;
      case "image/bmp":
        mimeType = "bmp";
        break;
      default:
        mimeType = "jpg";
        break;
    }

    cb(null, imgName + "." + mimeType);
  }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res, next) => {
  try {
    res.status(201).json({ 'status': 'success', 'msg': '이미지 업로드에 성공했습니다!', 'code': req.file.filename });
  } catch (err) {
    res.status(400).json({ 'status': 'error', 'msg': err.message });
  }
});

module.exports = router;
