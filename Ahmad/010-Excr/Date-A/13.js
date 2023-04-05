// 13. Write a JavaScript function that will return the number of minutes in hours and minutes.

// Test Data :

function timeConvert(num) {
  let hours = num / 60;
  let nHours = Math.floor(hours);
  let minutes = (hours - nHours) * 60;
  let nMinutes = Math.floor(minutes);
  return `${num} minutes = ${nHours} hours and ${nMinutes} minutes`;
}

console.log(timeConvert(200));
