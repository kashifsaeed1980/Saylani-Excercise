// 20. Write a js program to count frequency of each character in a string.

let str = "A quik brown fox jump over the lazy dog";
let obj = {};
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]] == undefined) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]] += 1;
  }
}
console.log(obj);
