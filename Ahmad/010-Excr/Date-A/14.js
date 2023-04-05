// 14. Write a JavaScript function to get the amount of days of a year.

// Test Data :

function days_of_a_year(yyyy) {
  return (yyyy % 4 === 0 && yyyy % 100 > 0) || yyyy % 400 == 0 ? 366 : 365;
}

console.log(days_of_a_year(2015));

365;

console.log(days_of_a_year(2016));

366;
