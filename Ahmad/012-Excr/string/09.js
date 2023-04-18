// 9. Write a js program to count total number of vowels and consonants in a string.

let str1 = "why are you message me";
let numVowels = 0;
let numConsonants = 0;

for (let i = 0; i < str1.length; i++) {
  if (str1[i].match(/[aeiou]/gi)) {
    numVowels++;
  } else {
    numConsonants++;
  }
}

console.log("Total Number of Vowels = " + numVowels);
console.log("Total Number of Consonants = " + numConsonants);
