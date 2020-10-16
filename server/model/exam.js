const pool = require('./mysql/db_con').createPool();
const promisePool = pool.promise();
const is = require('is-0');
const uuid = require('../utils/uuid');

const create = (E_S_PK, E_NM, E_STR_DT, E_LIMIT, E_REG_U_PK) => {  // 시험 추가
  return new Promise(async (resolve, reject) => {
    try {

      /* 과목 확인 코드
      const subjectSql = `SELECT * FROM ds2team.Subject WHERE S_PK = ?`;  // 과목 코드 있는지 없는지 검증 QUERY
      const [subject, subjectFields] = await promisePool.execute(subjectSql, [E_S_PK]);
      if (is.empty(subject)) {
        throw new Error('과목 값이 없거나, 잘못되었습니다.');
      }
      */
      
      const E_PK = uuid.generateConvert();
      const E_UG_PK = E_REG_U_PK;  // 이 부분 향후 Token 시스템 구현 완료 될 시, 유저 그룹 구하는 로직 구축 예정
      const examCreSql = `INSERT INTO ds2team.Exam (E_PK, E_S_PK, E_UG_PK, E_REG_U_PK, E_NM, E_STR_DT, E_LIMIT)
      VALUES (?, ?, ?, ?, ?, ?, ?);`;

      await promisePool.execute(examCreSql, [E_PK, '', E_UG_PK, E_REG_U_PK, E_NM, E_STR_DT, E_LIMIT]);
      resolve({ 'status': 'success', 'msg': '시험 추가에 성공했습니다.', 'examPK': E_PK });

    } catch (err) {
      reject(err);
    }
  });
}

const list = (LIMIT) => {  // 시험 리스트 조회
  return new Promise(async (resolve, reject) => {
    try {
      const examsSql = `SELECT S.S_NM AS subjectName, E.E_NM AS examName, E.E_STR_DT AS startTime, E.E_LIMIT AS limitTime, E.E_PK AS examPK FROM ds2team.Exam AS E
      LEFT JOIN ds2team.Subject AS S ON S.S_PK = E.E_S_PK

      ORDER BY E_STR_DT ASC LIMIT ?`;  // 시험 리스트 조회 QUERY
      const [exams, examsFields] = await promisePool.execute(examsSql, [LIMIT]);
      if (is.empty(exams)) {
        throw new Error('생성된 시험이 없습니다.');
      }
      resolve(exams);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  create,
  list
}