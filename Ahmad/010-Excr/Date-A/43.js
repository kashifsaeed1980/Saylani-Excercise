// 43. Write a JavaScript function to add specified months to a date.

// Test Data :

function add_months(dt, n) {
  return new Date(dt.setMonth(dt.getMonth() + n));
}

dt = new Date(2014, 10, 2);

console.log(add_months(dt, 10).toString());

// Output :

// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"
