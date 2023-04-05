// 20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).

// Test Data :

Date.shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function short_Days(day) {
  return Date.shortDays[day.getDay()];
}

day = new Date(2015, 10, 1);

console.log(short_Days(day));

("Sun");
