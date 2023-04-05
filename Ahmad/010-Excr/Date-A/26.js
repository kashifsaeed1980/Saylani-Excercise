// 26. Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).

// Test Data :
function numeric_month(dt) {
  return (dt.getMonth() < 9 ? "0" : "") + (dt.getMonth() + 1);
}

dt = new Date(2015, 10, 1);

console.log(numeric_month(dt));

// ("11");
