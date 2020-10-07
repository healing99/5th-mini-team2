const pool = require('./mysql/db_con').createPool();
const promisePool = pool.promise();
const is = require('is-0');
const uuid = require('../utils/uuid');
const ArrayExt = require('../utils/ArrayExt');

const create = (E_PK, QUESTIONS) => {  // 문제 추가

  return new Promise(async (resolve, reject) => {
    try {
      const examSql = `SELECT * FROM ds2team.Exam WHERE E_PK = ?`;  // 시험 고유 코드 있는지 없는지 검증 QUERY
      const [exam, examFields] = await promisePool.execute(examSql, [E_PK]);
      if (is.empty(exam)) throw new Error('시험 코드 값이 없거나, 잘못되었습니다.');

      pool.getConnection(async (err, conn) => {
        if (err) throw new Error('POOL Connection 생성에 실패했습니다.');
        conn.beginTransaction();
        try {
          await ArrayExt.asyncForEach(QUESTIONS, async (Q, Qindex) => {
            if (is.empty(Q.type)) throw new Error(`${Qindex + 1} 번의 type 항목이 없습니다.`);
            if (is.empty(Q.image)) throw new Error(`${Qindex + 1} 번의 image 항목이 없습니다.`);
            if (is.empty(Q.answer)) throw new Error(`${Qindex + 1} 번의 answer 항목이 없습니다.`);
            const { type, image, answer } = Q;
            const questionSql = `INSERT INTO ds2team.Question (Q_PK, Q_E_PK, Q_TYPE, Q_EXT_TYPE, Q_CONTENT, Q_IMAGE, Q_ANSWER, Q_ORDER, Q_SCORE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

            const Q_PK = uuid.generateConvert();
            conn.query(questionSql, [
              Q_PK,
              E_PK,
              Q.type,
              'IMG',
              '',
              image,
              JSON.stringify(Q.answer),
              Qindex + 1,
              0
            ]);

          });
        } catch (err) {
          conn.rollback();
          reject(err);
        }
        conn.commit();
        pool.releaseConnection(conn);
        resolve({ 'status': 'success', 'msg': `${QUESTIONS.length} 문제 추가 성공했습니다.` });
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  create
}