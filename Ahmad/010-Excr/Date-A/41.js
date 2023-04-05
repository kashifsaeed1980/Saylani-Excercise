// 41. Write a JavaScript function to add specified years to a date.

// Test Data :

function add_years(dt, n) {
  return new Date(dt.setFullYear(dt.getFullYear() + n));
}

dt = new Date(2014, 10, 2);

console.log(add_years(dt, 10).toString());

// Output :

// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
