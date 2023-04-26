// 11. Write a js program to count frequency of each element in an array.

const arr = ["a", "b", "a", "a", "c", "c"];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);
