const asyncForEach = async (array, callback) => {  // 비동기 방식 ForEach
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

module.exports = {
  asyncForEach
}