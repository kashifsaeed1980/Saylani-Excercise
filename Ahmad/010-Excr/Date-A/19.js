// 19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros.

// Test Data :

function day_of_the_month(d) {
  return (d.getDate() < 10 ? "0" : "") + d.getDate();
}

let d = new Date(2015, 10, 1);

console.log(day_of_the_month(d));
