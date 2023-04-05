// 33. Write a JavaScript function to get 12-hour format of an hour with leading zeros.

// Test Data :

function hours_with_zeroes(dt) {
  return (
    ((dt.getHours() % 12 || 12) < 10 ? "0" : "") + (dt.getHours() % 12 || 12)
  );
}

dt = new Date(1989, 10, 1);

console.log(hours_with_zeroes(dt));

// "12"
