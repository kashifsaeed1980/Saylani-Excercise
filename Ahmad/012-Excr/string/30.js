// 30. Write a js program to search all occurrences of a word in given string.

let count = 0;
let str = "the quik brown fox jump over the lazy dog";
let word = "the";

let a = str.split(" ");

for (let i = 0; i < a.length; i++) {
  if (word == a[i]) {
    count++;
  }
}

console.log(count);
