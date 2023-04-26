// 19. Write a js program to sort array elements in ascending or descending order.

let arr1 = [40, 100, 1, 5, 25, 10];

let arr2 = arr1.sort(function (a, b) {
  return a - b;
});
console.log(arr2);

let arr3 = arr1.sort(function (a, b) {
  return b - a;
});

console.log(arr3);
