// 17. Write a js program to count occurrences of a character in given string.

let count = 0;
let char = "h";
let str1 = "what are you doing here";

for (let i = 0; i < str1.length; i++) {
  if (str1.charAt(i) == char) {
    count++;
  }
}

console.log(count);
