const pool = require('./mysql/db_con').createPool();
const promisePool = pool.promise();

const test = () => {  // 테스트 쿼리
  return new Promise(async (resolve, reject) => {
    try {
      let testSql = `SELECT U_ID FROM ds2team.User`;
      let [test, testFields] = await promisePool.execute(testSql);
      if (test.length == 0) {
        throw new Error('유저 리스트가 없습니다.');
      }
      resolve(test);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  test
}