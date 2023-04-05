// 31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.

function upper_am_pm(dt) {
  return dt.getHours() < 12 ? "AM" : "PM";
}

dt = new Date();
console.log(upper_am_pm(dt));

dt = new Date(2000, 4, 15);
console.log(upper_am_pm(dt));
