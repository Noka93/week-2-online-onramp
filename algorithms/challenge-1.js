function missingNumber(numArr) {
  let missingArray = [];
  let numArr1 = Math.min(1);
  let numArr2 = Math.max(9);

  for (let i = numArr1; i <= numArr2; i++) {
    if (numArr.indexOf(i) < 0) {
      missingArray.push(i);
    }
  }
  return missingArray;
}

module.exports = missingNumber;
