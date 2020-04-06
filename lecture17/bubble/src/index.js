var sortNumericArray = [23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5];

for (var i = 0, num; i < sortNumericArray.length - 1; i++) {
  for (var j = 0; j < sortNumericArray.length - 1; j++) {
    if (sortNumericArray[j] > sortNumericArray[j + 1]) {
      num = sortNumericArray[j];
      sortNumericArray[j] = sortNumericArray[j + 1];
      sortNumericArray[j + 1] = num;
    }
  }
}
console.log(sortNumericArray);
