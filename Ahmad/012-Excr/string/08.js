// 8. Write a js program to find total number of alphabets, digits or special character in a string.

let myString = "Hello, 123 World!";

// initialize counters
let alphabetCount = 0;
let digitCount = 0;
let specialCharCount = 0;

// loop through each character in the string
for (let i = 0; i < myString.length; i++) {
  // check if the character is an alphabet
  if (myString[i].match(/[a-z]/i)) {
    alphabetCount++;
  }
  // check if the character is a digit
  else if (myString[i].match(/[0-9]/)) {
    digitCount++;
  }
  // otherwise, count it as a special character
  else {
    specialCharCount++;
  }
}

// output the results
console.log("Alphabets: " + alphabetCount);
console.log("Digits: " + digitCount);
console.log("Special Characters: " + specialCharCount);
