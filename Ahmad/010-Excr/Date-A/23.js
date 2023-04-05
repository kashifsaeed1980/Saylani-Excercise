// 23. Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.).

// Test Data :
function english_ordinal_suffix(dt) {
  return (
    dt.getDate() +
    (dt.getDate() % 10 == 1 && dt.getDate() != 11
      ? "st"
      : dt.getDate() % 10 == 2 && dt.getDate() != 12
      ? "nd"
      : dt.getDate() % 10 == 3 && dt.getDate() != 13
      ? "rd"
      : "th")
  );
}
dt = new Date(2015, 10, 1);

console.log(english_ordinal_suffix(dt));

// "1st"
