// 21. Write a js program to left rotate an array.

function rotate_elements_left(array) {
  return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));
