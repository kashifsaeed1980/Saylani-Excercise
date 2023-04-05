// 29. Write a JavaScript function to get a two digit representation of a year.

// Examples : 79 or 04

// Test Data :

function sort_year(dt) {
  return ("" + dt.getFullYear()).substr(2);
}

dt = new Date(1989, 10, 1);

console.log(sort_year(dt));

// "89"
