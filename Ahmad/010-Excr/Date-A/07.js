// 7. Write a JavaScript function to test whether a date is a weekend.

// Note : Use standard Saturday/Sunday definition of a weekend.

// Test Data :

function is_weekend(date) {
  let date1 = new Date(date);
  if (date1.getDay() === 0 || date1.getDay() === 6) {
    return "weekend";
  }
  //   else {
  //       "working day"
  //   }
}

console.log(is_weekend("Nov 15, 2014"));

console.log(is_weekend("Nov 16, 2014"));

console.log(is_weekend("Nov 17, 2014"));
