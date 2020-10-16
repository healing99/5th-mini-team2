const pool = require('./mysql/db_con').createPool();
const promisePool = pool.promise();
const is = require('is-0');
const uuid = require('../utils/uuid');

const solve = (examPK) => {  // 시험 시작
  return new Promise(async (resolve, reject) => {
    try {
      const examSql = `SELECT * FROM ds2team.Exam WHERE E_PK = ?`;  // 시험 코드 있는지 없는지 검증 QUERY
      const [exams, examsFields] = await promisePool.execute(examSql, [examPK]);

      const questionSql = `SELECT Q_TYPE AS type, Q_IMAGE AS img, Q_ANSWER AS answer FROM ds2team.Question WHERE Q_E_PK = ? ORDER BY Q_ORDER ASC`;
      const [questions, questionsFields] = await promisePool.execute(questionSql, [examPK]);
      if (is.empty(exams)) throw new Error('시험 정보가 없거나, 잘못되었습니다.');
      resolve({
        classTitle: exams[0].E_NM,
        testName: exams[0].E_NM,
        testTime: exams[0].E_LIMIT,
        questions: questions
      })
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  solve
}