// Write a JavaScript function to convert a Unix timestamp to time.

// Test Data :

function Unix_timestamp(t) {
  var dt = new Date(t * 1000);
  var hr = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  return hr + ":" + m + ":" + s;
}

console.log(Unix_timestamp(1412743274));
