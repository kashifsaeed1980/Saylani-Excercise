// 7. Write a js program to count total number of negative elements in an array.

var numbers = [10, -12, 89, 56, -83, 8, 90, -8, 34, -43];
var pos_count = (neg_count = 0);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) neg_count++;
  else pos_count++;
}
console.log(`The positive numbers in an array is ${pos_count}`);
console.log(`The negative numbers in an array is ${neg_count}`);
