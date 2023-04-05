// 37. Write a JavaScript function to get Timezone.

// Test Data :
function seconds_with_leading_zeros(dt) {
  return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date();

console.log(seconds_with_leading_zeros(dt));

// "India Standard Time"
