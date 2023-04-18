// 16. Write a js program to search all occurrences of a character in given string.
let count = 0;
let char = "e";
let str1 = "what are you doing here";

for (let i = 0; i < str1.length; i++) {
  if (str1.charAt(i) == char) {
    count++;
  }
}

console.log(count);
