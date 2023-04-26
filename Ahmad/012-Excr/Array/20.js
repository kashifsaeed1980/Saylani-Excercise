// 20. Write a js program to sort even and odd elements of array separately.

function splitOddAndEven(numbers) {
  let odd = [];
  let even = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // number is even
      even.push(numbers[i]);
    } else {
      // number is not even (=odd)
      odd.push(numbers[i]);
    }
  }

  // create an object with the odd and even array in it
  const returnObject = {
    odd,
    even,
  };

  return returnObject;
}

console.log(splitOddAndEven([2, 43, 55, 34, 46, 50]));
