// 11. Write a js program to find reverse of a string.

let str1 = "Kali Charan";
let str2 = " ";

for (let i = str1.length - 1; i < str1.length; i--) {
  str2 += str1[i];
  if (i == 0) {
    break;
  }
}

console.log(str2);
