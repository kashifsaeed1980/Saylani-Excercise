// 24. Write a js program to find maximum and minimum elements in array using function.

function findNum(arr) {
  let miniNum = Math.min(...arr);
  let maxNum = Math.max(...arr);

  console.log(`Minimum Number = ${miniNum} \nMaximum Number = ${maxNum}`);
}

findNum([2, 6, 4, 8, 11, 75, 34, 90, 15, 4]);
