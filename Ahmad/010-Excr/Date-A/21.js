// 21. Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).

// Test Data :
Date.longDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function long_Days(dt) {
  return Date.longDays[dt.getDay()];
}

dt = new Date(2015, 10, 1);

console.log(long_Days(dt));
