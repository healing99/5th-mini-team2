const pool = require('./mysql/db_con').createPool();
const promisePool = pool.promise();
const uuid = require('../utils/uuid');

const subjectCreate = (S_NM) => {  // 과목 추가
  return new Promise(async (resolve, reject) => {
    try {
      const RE_S_SM = S_NM.replace(' ', '');  // 과목 이름에 공백 제거
      const subjectSql = `SELECT * FROM ds2team.Subject WHERE S_NM = ?`;  // 과목 이름 있는지 없는지 검증 QUERY
      const [subjects, subjectsFields] = await promisePool.execute(subjectSql, [RE_S_SM]);
      if (subjects.length != 0) {
        throw new Error('과목 이름이 중복됩니다.');
      }
      const S_PK = uuid.generateConvert();
      const subCreSql = `INSERT INTO ds2team.Subject (S_PK, S_NM) VALUES (?, ?);`;
      await promisePool.execute(subCreSql, [S_PK, RE_S_SM]);
      resolve({ 'S_PK': S_PK, 'S_NM': RE_S_SM });
    } catch (err) {
      reject(err);
    }
  });
}

const subjectList = (S_NM) => {  // 과목 추가
  return new Promise(async (resolve, reject) => {
    try {
      const subjectSql = `SELECT * FROM ds2team.Subject`;
      const [subjects, subjectsFields] = await promisePool.execute(subjectSql);
      resolve(subjects);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  subjectCreate,
  subjectList
}