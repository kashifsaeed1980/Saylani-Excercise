// 19. Write a js program to find lowest frequency character in a string.

function lowestFrequencyChar(str) {
  let freqMap = {};

  // Create a frequency map of characters in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freqMap[char]) {
      freqMap[char]++;
    } else {
      freqMap[char] = 1;
    }
  }

  // Find the character with the lowest frequency
  let lowestChar = null;
  let lowestFreq = Infinity;
  for (let char in freqMap) {
    if (freqMap[char] < lowestFreq) {
      lowestChar = char;
      lowestFreq = freqMap[char];
    }
  }

  return lowestChar;
}

// Example usage
console.log(lowestFrequencyChar("what are you doing")); // Output: 'd'
