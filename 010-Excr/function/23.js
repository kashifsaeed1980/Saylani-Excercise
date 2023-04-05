// 23. Write a js program to find sum of elements of array using function.

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  console.log(sum); // 11
  // return sum
  return sum;
}

sumArray([1, 4, 0, 9, -3]);
