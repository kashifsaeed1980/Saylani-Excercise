// 7. Write a js program to print all strong numbers between given interval using functions.
let factorial = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function isStrong(N) {
  let num = N.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += factorial[num[i] - "0"];
  }
  if (sum == N) {
    return `${N} is factorial Number`;
  } else {
    `${N} is not factorial Number`;
  }
}
