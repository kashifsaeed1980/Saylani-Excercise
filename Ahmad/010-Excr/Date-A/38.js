// 38. Write a JavaScript function to find whether or not the date is in daylights savings time.

// Test Data :

function daylights_savings(dt) {
  var dst = null;
  for (var i = 0; i < 12; ++i) {
    var d = new Date(dt.getFullYear(), i, 1);
    var offset = dt.getTimezoneOffset();

    if (dst === null) dst = offset;
    else if (offset < dst) {
      dst = offset;
      break;
    } else if (offset > dst) break;
  }
  return (dt.getTimezoneOffset() == dst) | 0;
}

dt = new Date();

console.log(daylights_savings(dt));

// 1
