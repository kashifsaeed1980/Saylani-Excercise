// 36. Write a JavaScript function to get seconds with leading zeros (00 through 59).

// Test Data :

function seconds_with_leading_zeros(dt) {
  return (dt.getMinutes() < 10 ? "0" : "") + dt.getMinutes();
}

dt = new Date(1989, 10, 1);

console.log(seconds_with_leading_zeros(dt));

// "00"
