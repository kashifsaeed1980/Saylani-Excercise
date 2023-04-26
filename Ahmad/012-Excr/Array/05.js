// 5. Write a js program to find second largest element in an array.

let arr1 = [2, 5, 7, 8, 12, 65, 32, 18];
console.log(arr1);
let maxNum = Math.max(...arr1);

let rmMaxNum = arr1.splice(arr1.indexOf(maxNum), 1);

let LargeNum = Math.max(...arr1);

console.log(arr1);

console.log(LargeNum);
