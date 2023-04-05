// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// program to check if a number is prime or not

// take input from the user
let isPrime = true;

function prime(number) {
  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        console.log(`${number} is a not prime number`);
        isPrime = false;
        break;
      } else if (isPrime) {
        console.log(`${number} is a prime number`);
        break;
      }
    }
  }
}

//Check Armstrong Number

let sum = 0;
function armstrong(number) {
  let num2 = number;
  let num1 = number.toString().length;
  while (num2 > 0) {
    // finding the one's digit

    let remainder = num2 % 10;
    sum += remainder ** num1;
    // removing last digit from the num2
    num2 = parseInt(num2 / 10);
  }
  // check the condition
  if (sum == number) {
    console.log(`${number} is an Armstrong number`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }
}
prime(12);
armstrong(256);
