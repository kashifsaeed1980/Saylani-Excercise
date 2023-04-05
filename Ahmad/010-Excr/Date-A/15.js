// 15. Write a JavaScript function to get the quarter (1 to 4) of the year.

// Test Data :

function quarter_of_the_year(date) {
  let month = date.getMonth() + 1;
  return Math.ceil(month / 3);
}

console.log(quarter_of_the_year(new Date(2015, 1, 21)));

console.log(quarter_of_the_year(new Date(2015, 10, 18)));
