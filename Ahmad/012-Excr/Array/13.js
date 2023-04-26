// 13. Write a js program to count total number of duplicate elements in an array.

const arr = ["one", "one", "one", "two", "two", "three"];

const count = {};

arr.forEach((element) => {
  count[element] = (count[element] || 0) + 1;
});

console.log(count);
