const conn = require('./mysql/db_con').createCon();
const pool = require('./mysql/db_con').createPool();
const promisePool = pool.promise();
const is = require('is-0');
const uuid = require('../utils/uuid');
const ArrayExt = require('../utils/ArrayExt');

const create = (E_PK, QUESTIONS) => {  // 무제 추가
  return new Promise(async (resolve, reject) => {
    try {
      const examSql = `SELECT * FROM ds2team.Exam WHERE E_PK = ?`;  // 시험 고유 코드 있는지 없는지 검증 QUERY
      const [exam, examFields] = await promisePool.execute(examSql, [E_PK]);
      if (is.empty(exam)) {
        throw new Error('시험 코드 값이 없거나, 잘못되었습니다.');
      }
      pool.getConnection(async (err, conn) => {
        if (err) throw new Error('POOL Connection 생성에 실패했습니다.');
        conn.beginTransaction();
        try {
          await ArrayExt.asyncForEach(QUESTIONS, async (Q, Qindex, Qarr) => {
            if (is.empty(Q.Q_TYPE)) throw new Error(`${Qindex + 1} 번의 Q_TYPE 항목이 없습니다.`);
            if (is.empty(Q.Q_EXT_TYPE)) throw new Error(`${Qindex + 1} 번의 Q_EXT_TYPE 항목이 없습니다.`);
            if (is.empty(Q.Q_SCORE)) throw new Error(`${Qindex + 1} 번의 Q_SCORE 항목이 없습니다.`);
            if (is.empty(Q.ANSWERS)) throw new Error(`${Qindex + 1} 번의 ANSWERS 항목이 없습니다.`);
            const { Q_TYPE, Q_EXT_TYPE, Q_CONTENT, Q_IMAGE, Q_SCORE, ANSWERS } = Q;
            const questionSql = `INSERT INTO ds2team.Question (Q_PK, Q_E_PK, Q_TYPE, Q_EXT_TYPE, Q_CONTENT, Q_IMAGE, Q_ORDER, Q_SCORE) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const Q_PK = uuid.generateConvert();
            conn.query(questionSql, [
              Q_PK,
              E_PK,
              Q_TYPE,
              Q_EXT_TYPE,
              Q_CONTENT,
              Q_IMAGE,
              Qindex + 1,
              Q_SCORE
            ]);
            await ArrayExt.asyncForEach(ANSWERS, async (A, Aindex, Aarr) => {
              if (is.empty(A.A_EXT_TYPE)) throw new Error(`문제 ${Qindex + 1} 번의 ${Aindex + 1} 번 답 A_EXT_TYPE 항목이 없습니다.`);
              if (is.empty(A.A_STATUS)) throw new Error(`문제 ${Qindex + 1} 번의 ${Aindex + 1} 번 답 A_STATUS 항목이 없습니다.`);
              const { A_EXT_TYPE, A_CONTENT, A_IMAGE, A_STATUS } = A;
              const answerSql = `INSERT INTO ds2team.Answer (A_PK, A_Q_PK, A_EXT_TYPE, A_CONTENT, A_IMAGE, A_STATUS) VALUES (?, ?, ?, ?, ?, ?)`;
              conn.query(answerSql, [
                uuid.generateConvert(),
                Q_PK,
                A_EXT_TYPE,
                A_CONTENT,
                A_IMAGE,
                A_STATUS
              ]);
            });
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