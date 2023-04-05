// 50. Write a JavaScript function to get the week start date.

function startOfWeek(date) {
  var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

  return new Date(date.setDate(diff));
}

dt = new Date();

console.log(startOfWeek(dt).toString());
