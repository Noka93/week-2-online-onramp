function numSwap(number) {
  let num1 = number.toString();
  let num2 = num1.split("");
  let result = num2.length;

  if (result % 2 === 0) {
    for (let i = 0; i < result - 1; i++) {
      [num2[2 * i], num2[2 * i + 1]] = [num2[2 * i + 1], num2[2 * i]];
    }
    return num2.join("");
  }
}

module.exports = numSwap;
