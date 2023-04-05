// 18. Write a JavaScript program to calculate age.

// Test Data :

function calculate_age(age) {
  let diff_ms = Date.now() - age.getTime();
  let age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));

40;

console.log(calculate_age(new Date(1962, 1, 1)));

61;
