// 13. Write a js program to reverse order of words in a given string

let str1 = "A brown fox jump over a lazy dog";

let str2 = " ";

for (let i = str1.length - 1; i < str1.length; i--) {
  str2 += str1[i];
  if (i == 0) {
    break;
  }
}

console.log(str2);
