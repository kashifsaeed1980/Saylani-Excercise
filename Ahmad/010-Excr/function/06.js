// 6. Write a js program to find all prime numbers between given interval using functions.

function prime(lowNum, hiNum) {
  for (let i = lowNum; i <= hiNum; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
}

prime(5, 50);
