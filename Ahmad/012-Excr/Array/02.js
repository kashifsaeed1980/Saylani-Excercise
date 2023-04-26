// 2. Write a js program to print all negative elements in an array.

let myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function getNegativeNumbers(array) {
  let negatives = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negatives.push(array[i]);
    }
  }
  return negatives;
}
console.log(getNegativeNumbers(myArray));
