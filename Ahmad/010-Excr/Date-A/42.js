// 42. Write a JavaScript function to add specified weeks to a date.

// Test Data :

function add_weeks(dt, n) {
  return new Date(dt.setDate(dt.getDate() + n * 7));
}

dt = new Date(2014, 10, 2);

console.log(add_weeks(dt, 10).toString());

// Output :

// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"
