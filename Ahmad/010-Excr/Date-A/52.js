// 52. Write a JavaScript function to get the month start date.

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

dt = new Date();

console.log(startOfMonth(dt).toString());
