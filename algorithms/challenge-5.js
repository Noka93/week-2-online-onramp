function arraySum(arr1, arr2) {
  let result = [];
  let firstLength = arr1.length;
  let secondLength = arr2.length;

  for (let i = 0; i < firstLength; i++) {
    result[i] = arr1[i] + arr2[i % secondLength];
  }

  return result;
}

module.exports = arraySum;
