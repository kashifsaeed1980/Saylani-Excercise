// Write a JavaScript function to get the current date.

// Note : Pass a separator as an argument.

// Test Data :

function curday(sign) {
  let newDate = new Date();
  let day = newDate.getDay();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return day + sign + month + sign + year;
}

console.log(curday("/"));

console.log(curday("-"));
