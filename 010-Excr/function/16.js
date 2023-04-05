//16 Write a js program to check whether a number is palindrome or not using function.

function isPalindrome(num) {
  // Convert number to a string
  let str = num.toString();
  // Reverse the string
  let reversedStr = str.split("").reverse().join("");
  // Compare the original and reversed strings
  return str === reversedStr;
}

console.log("palindrome = " + isPalindrome(351));
