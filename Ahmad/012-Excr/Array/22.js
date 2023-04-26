// 22. Write a js program to right rotate an array.

function rotate_elements_right(array) {
  return [array[2], array[0], array[1]];
}
console.log(rotate_elements_right([3, 4, 5]));
