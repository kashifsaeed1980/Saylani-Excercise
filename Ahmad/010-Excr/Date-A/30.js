// 30. Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.
function lower_am_pm(dt) {
  return dt.getHours() < 12 ? "am" : "pm";
}

dt = new Date();
console.log(lower_am_pm(dt));
