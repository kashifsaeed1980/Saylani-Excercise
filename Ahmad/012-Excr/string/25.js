// 25. Write a js program to replace first occurrence of a character with another in a string.

const str = "hello world";

const replaceFirst = str.replace(/e/, "i");
console.log(replaceFirst); // 👉️ he_lo world

const replaceAll = str.replace(/l/g, "_");
console.log(replaceAll); // 👉️ he__o wor_d
