const pool = require('./mysql/db_con').createPool();
const promisePool = pool.promise();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const is = require('is-0');
const uuid = require('../utils/uuid');
const jwt = require('jsonwebtoken');

const register = (userId, userPw, Gr) => {  // 유저 등록
  return new Promise(async (resolve, reject) => {
    try {
      const grSql = `SELECT * FROM ds2team.UserGroup WHERE UG_PK = ?`;  // 유저 그룹 있는지 없는지 검증 QUERY
      const [gr, grFields] = await promisePool.execute(grSql, [Gr]);
      if (is.empty(gr)) {
        throw new Error('그룹값이 없거나, 잘못되었습니다.');
      } else {
        const userSql = `SELECT * FROM ds2team.User WHERE U_ID = ?`;  // 중복 ID 있는지 없는지 검증 QUERY
        const [user, userFields] = await promisePool.execute(userSql, [userId]);
        if (user.length == 0) {
          const salt = bcrypt.genSaltSync(saltRounds);
          const userPwHash = bcrypt.hashSync(userPw, salt);
          const regSql = `INSERT INTO ds2team.User(U_PK, U_UG_PK, U_FL, U_ID, U_PW) VALUES (?, ?, ?, ?, ?);`;
          await promisePool.execute(regSql, [uuid.generateConvert(), Gr, 'N', userId, userPwHash]);
          resolve({ 'status': 'success', 'msg': '유저 등록에 성공했습니다.' });
        } else {
          throw new Error('중복된 ID가 있습니다.');
        }
      }
    } catch (err) {
      reject(err);
    }
  });
}
/*  현재 미니 프로젝트 단계에서는 아이디 비밀번호 로그인 X, 향후 활용 가능성 있어 남겨둠
const check = (userId, userPw) => {  // 유저 검증
  return new Promise(async (resolve, reject) => {
    try {
      const userSql = `SELECT * FROM ds2team.User WHERE U_ID = ?`;
      const [user, userFields] = await promisePool.execute(userSql, [userId]);
      if (user.length == 0) throw new Error('유저 정보가 없습니다.');
      const { U_PW, U_FL } = user[0];
      if (!bcrypt.compareSync(userPw, U_PW)) throw new Error('비밀번호가 틀립니다.');
      if (U_FL == 'N') throw new Error('활성화 된 계정이 아닙니다.');
      const token = jwt.sign({ sub: userId }, 'secret_key');
      resolve({ 'status': 'success', 'msg': '정상 유저', 'token': token });
    } catch (err) {
      reject(err);
    }
  });
}
*/
const check = (userId, academyCode) => {  // 유저 검증
  return new Promise(async (resolve, reject) => {
    try {
      const userSql = `SELECT * FROM ds2team.User WHERE U_ID = ?`;
      const [user, userFields] = await promisePool.execute(userSql, [userId]);
      if (user.length == 0) throw new Error('유저 정보가 없습니다.');
      const { U_UG_PK, U_FL } = user[0];
      if (U_UG_PK != academyCode) throw new Error('학원 코드가 틀립니다.');
      if (U_FL == 'N') throw new Error('활성화 된 계정이 아닙니다.');
      const token = jwt.sign({ sub: userId }, 'secret_key');
      resolve({ 'status': 'success', 'msg': '정상 유저', 'token': token });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  register,
  check
}