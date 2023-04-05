// 46. Write a JavaScript function to get time differences in days between two dates.

// Test Data :

function diff_days(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.abs(Math.round(diff));
}
dt1 = new Date("October 13, 2014 08:11:00");

dt2 = new Date("October 19, 2014 11:13:00");

console.log(diff_days(dt1, dt2));

// 6
