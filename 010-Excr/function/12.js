// 12. Write a js program to print all even or odd numbers in given range using function.
let minNum = 1;
let maxNum = 20;

function checkNum(n) {
  if (n % 2 === 0) {
    console.log(`${n} is even number`);
  } else {
    console.log(`${n} is odd number`);
  }
}

for (let i = minNum; i <= maxNum; i++) {
  checkNum(i);
}
