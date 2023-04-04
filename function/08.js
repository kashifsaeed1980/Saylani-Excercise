// 8. Write a js program to print all Armstrong numbers between given interval using functions.

// program to find Armstrong number between intervals

// take an input
const lowNumber = 1;
const highNumber = 800;

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {
  // converting number to string
  let numberOfDigits = i.toString().length;

  let sum = 0;

  // create a temporary variable
  let temp = i;

  /* loop through a number to find if 
    a number is an Armstrong number */
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }

  if (sum == i) {
    console.log(i);
  }
}
