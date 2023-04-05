// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

// Test Data :

function compare_dates(Date1, Date2) {
  if (Date1 > Date2) {
    return "Date1 > Date2";
  } else if (Date1 < Date2) {
    return "Date1 < Date2";
  } else {
    return "Date1 = Date2";
  }
}

console.log(
  compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:00"))
);

console.log(
  compare_dates(new Date("11/14/2013 00:01"), new Date("11/14/2013 00:00"))
);

console.log(
  compare_dates(new Date("11/14/2013 00:00"), new Date("11/14/2013 00:01"))
);
