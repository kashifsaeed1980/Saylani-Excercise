// 6. Write a JavaScript function to add specified minutes to a Date object.

// Test Data :

var add_minutes = function (date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
};

console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
