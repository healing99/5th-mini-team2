const uuid4 = require('uuid4');

const generate = () => {
  return uuid4();
}

const generateConvert = () => {
  const tokens = generate().split('-');
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
}

module.exports = {
  generate,
  generateConvert
}