// 22. Write a js program to display all array elements using function.

const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
function arr(a) {
  for (const i in a) {
    console.log(`row ${i}`);
    for (const j in a[i]) {
      console.log(` ${a[i][j]}`);
    }
  }
}

arr(a);
