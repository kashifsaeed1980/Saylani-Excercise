// 10. Write a js program to count total number of words in a string.

let str1 = "what is your name";

let str2 = str1.split(" ");
let totalWords = 0;

for (let i = 0; i < str2.length; i++) {
  totalWords++;
}

console.log(totalWords);
