// 14. Write a js program to find sum of all even or odd numbers in given range using function.
let sum = 0;
let maxNum = 10;
let minNum = 1;

function evenNum(n) {
  if (n % 2 === 0) {
    console.log(`${n} is even number`);
  }
}
for (let i = minNum; i <= maxNum; i++) {
  evenNum(i);
  sum += i;
}
console.log("sum of even number = " + sum);
