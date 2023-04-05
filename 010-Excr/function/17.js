// 8. Write a js program to find factorial of any number using function.

function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    while (num > 1) {
      num--;
      result *= num;
    }
  }
  return result;
}
console.log(factorialize(5));
