// 13. Write a js program to find sum of all natural numbers between 1 to n using function.

function is_Natural(n) {
  if (typeof n !== "number") return "Not a number";

  return n >= 0.0 && Math.floor(n) === n && n !== Infinity;
}

let maxNum = 10;
let sum = 0;
for (let i = 1; i <= maxNum; i++) {
  //   console.log(i + " is Natural Number = " + is_Natural(i));
  sum += i;
}
console.log("Sum of Natural Number = " + sum);
