const isEven = (num) => {
  return num % 2 === 0;

}

const sum = (arr) => {
  return arr.reduce((a, b) => a + b);

}

const comboSum = (arr, sum) => {
  return arr.reduce((a, b) => a + b) === sum;

}

module.exports = {
  isEven,
  sum,
  comboSum
}