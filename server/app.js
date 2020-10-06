const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const moment = require('moment');
const dotenv = require('dotenv');
dotenv.config()
const http = require('http');

const port = process.env.PORT || '3000';

const app = express();

app.disable('x-powered-by');
app.set('port', port);
app.set('trust proxy', true);

logger.token('date', function () {
  const d = new Date().toString().replace(/[A-Z]{3}\+/, '+').split(/ /);

  return (moment(new Date).format('YYYY/MM/DD') + ' ' + d[4] + ' ' + d[5]);
});
app.use(logger('[:date] [:remote-addr] [:method HTTP/:http-version] [:status] [:res[content-length]] [:url] [:user-agent]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRouter = require('./routes/auth');
const subjectRouter = require('./routes/subject');
const examRouter = require('./routes/exam');
const questionRouter = require('./routes/question');

app.use('/auth', authRouter);
app.use('/subject', subjectRouter);
app.use('/exam', examRouter);
app.use('/question', questionRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  const notice = { 'status': err.status, 'msg': err.message };
  // NodeJS 실행 환경에 따라 에러 메세지 노출 범위 수정 (development 일 경우 err.stack 노출)
  if (req.app.get('env') === 'development') {
    notice['stack'] = err.stack;
    console.log(err);
  }
  res.status(err.status || 500).json(notice);
});

const server = http.createServer(app);

server.listen(port);