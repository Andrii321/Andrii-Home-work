let numbers = [
  23,
  2,
  45,
  56,
  1,
  22,
  134,
  8,
  33,
  22,
  44,
  44,
  3,
  0,
  5,
  0,
  56,
  1,
  1,
  1,
  70
];

function unique(arr) {
  let result = [];
  for (let numbers of arr) {
    if (!result.includes(numbers)) {
      result.push(numbers);
    }
  }
  return result;
}

alert(unique(numbers));
