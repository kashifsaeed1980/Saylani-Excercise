// 32. Write a JavaScript function to swatch Internet time (000 through 999).

// Test Data :

function internet_time(dt) {
  return Math.floor(
    ((((dt.getUTCHours() + 1) % 24) +
      dt.getUTCMinutes() / 60 +
      dt.getUTCSeconds() / 3600) *
      1000) /
      24
  );
}

dt = new Date(1989, 10, 1);

console.log(internet_time(dt));

// 812
