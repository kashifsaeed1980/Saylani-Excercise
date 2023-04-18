// 12. Write a js program to check whether a string is palindrome or not.
// program to check if the string is palindrome or not

function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

const value = checkPalindrome("madam");

console.log(value);
