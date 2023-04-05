// 27. Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).

// Test Data :
Date.shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function short_months(dt) {
  return Date.shortMonths[dt.getMonth()];
}

dt = new Date(2015, 10, 1);

console.log(short_months(dt));

// "Nov"
