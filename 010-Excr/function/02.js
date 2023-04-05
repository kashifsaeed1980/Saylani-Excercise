// 2. Write a js program to find diameter, circumference and area of circle using functions.

function circle(rad) {
  // find diameter
  let d = rad * 2;
  // find circumference
  let c = rad * 2 * Math.PI;
  // find area circle
  let a = Math.PI * rad * rad;

  console.log(`Diameter = ${d},\nCircumference = ${c},\nArea = ${a}`);
}

circle(2);
