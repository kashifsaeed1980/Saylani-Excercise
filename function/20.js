// 20. Write a js program to find GCD (HCF) of two numbers using function.

function gcd(num1, num2) {
  for (let i = 1; i <= num1 && i <= num2; i++) {
    // check if is factor of both integers
    if (num1 % i == 0 && num2 % i == 0) {
      console.log(`GCD(HCF) of ${num1} and ${num2} is ${i}.`);
    }
  }
}

gcd(35, 40);
