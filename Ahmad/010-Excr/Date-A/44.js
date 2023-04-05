// 44. Write a JavaScript function to get time differences in minutes between two dates.

// Test Data :

function diff_minutes(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

dt1 = new Date("October 13, 2014 11:11:00");

dt2 = new Date("October 13, 2014 11:13:00");

console.log(diff_minutes(dt1, dt2));

// 2
