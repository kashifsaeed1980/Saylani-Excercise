// 6. Write a js program to count total number of even and odd elements in an array.
let arr1 = [12, 33, 89, 79, 65, 4, 24];
let i = 0;
console.log(arr1[i]);

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
    console.log(arr1[i] + " is odd number");
  } else {
    console.log(arr1[i] + " is even number");
  }
}
