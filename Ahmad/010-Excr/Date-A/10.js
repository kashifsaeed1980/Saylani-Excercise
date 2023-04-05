// 10. Write a JavaScript function to calculate 'yesterday day'.

// Test Data :

var yesterday = function (date) {
  var lDate = new Date(date);
  return new Date(lDate.setDate(lDate.getDate() - 1)).toString();
};

console.log(yesterday("Nov 15, 2014"));

console.log(yesterday("Nov 16, 2015"));

console.log(yesterday("Nov 17, 2016"));
