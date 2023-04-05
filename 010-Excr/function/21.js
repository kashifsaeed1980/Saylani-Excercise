// 21. Write a js program to find LCM of two numbers using function.

function lcm(num1, num2) {
  let min = num1 > num2 ? num1 : num2;

  // while loop
  while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
      console.log(`The LCM of ${num1} and ${num2} is ${min}`);
      break;
    }
    min++;
  }
}

lcm(12, 18);
