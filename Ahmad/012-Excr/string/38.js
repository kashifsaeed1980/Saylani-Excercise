// 38. Write a js program to remove all extra blank spaces from given string.

const sentence = "    My string with a    lot   of Whitespace.  ";

console.log(sentence.replace(/\s+/g, " ").trim());
