// 35. Write a JavaScript function to get minutes with leading zeros (00 to 59).

// Test Data :

function minutes_with_leading_zeros(dt) {
  return (dt.getMinutes() < 10 ? "0" : "") + dt.getMinutes();
}

dt = new Date(1989, 10, 1);

console.log(minutes_with_leading_zeros(dt));

// "00"
