// Q 1

/* let today;
switch (new Date().getDay()) {
  case 0:
    today = "Sunday";
    break;
  case 1:
    today = "Monday";
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4:
    today = "Thursday";
    break;
  case 5:
    today = "Friday";
    break;
  case 6:
    today = "Saturday";
}

console.log(today); */

// Q 2

/* let year = 2023;
let month = new Date().getMonth() + 1;
let totalDays;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    totalDays = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    totalDays = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      totalDays = 29;
    } else {
      totalDays = 28;
    }
    break;
  default:
    totalDays = -1; // invalid month
}

console.log(totalDays); */

// Q 3
/* 
let vovelCharacter = prompt("write a alphabet character");

switch (vovelCharacter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vovel Character");
    break;

  default:
    console.log("Consonant Character");
    break;
} */

// Q 4

/* const num1 = Number(prompt("please choose first number"));
const num2 = Number(prompt("please choose second number"));

switch (true) {
  case num1 > num2:
    console.log(`${num1} Bigger than ${num2}`);
    break;
  case num1 < num2:
    console.log(`${num2} Bigger than ${num1}`);
    break;
  default:
    console.log(`${num1} is equal to ${num2}`);
} */

// Q 5

/* let guesNum = Number(prompt("please choose first number"));

switch (guesNum % 2) {
  case 0:
    console.log("It is even number");
    break;
  default:
    console.log("It is odd Number");
} */

// Q 6

/* let guesNum = Number(prompt("please choose first number"));

switch (guesNum) {
  case guesNum > 0:
    console.log("It is Positive Number");
    break;
  case guesNum == 0:
    console.log("It is Zero");
    break;
  default:
    console.log("it is negative number");
    break;
} */
