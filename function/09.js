// 9. Write a js program to print all perfect numbers between given interval using functions.

function is_perfect(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log(number + " is a perfect number.");
  }
}
// is_perfect(27);
let minNum = 2;
let maxNum = 300;
console.log(`Prefect Number between ${minNum} and ${maxNum}`);
for (let i = minNum; i <= maxNum; i++) {
  is_perfect(i);
}
