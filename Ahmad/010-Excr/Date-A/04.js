// Write a JavaScript function to get the month name from a particular date.

// Test Data :
let monthName = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];
// let date = new Date();
// let month = date.getMonth();
// console.log(monthName[month]);

function month_name(guesMonth) {
  return monthName[guesMonth.getMonth()];
}

console.log(month_name(new Date("10/11/2009")));

console.log(month_name(new Date("11/13/2014")));
