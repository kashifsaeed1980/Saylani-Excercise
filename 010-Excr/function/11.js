// 11. Write a js program to print all natural numbers between 1 to n using function.

function is_Natural(n) {
  if (typeof n !== "number") return "Not a number";

  return n >= 0.0 && Math.floor(n) === n && n !== Infinity;
}

let maxNum = 20;

for (let i = 1; i <= maxNum; i++) {
  console.log(i + " is Natural Number = " + is_Natural(i));
}
