// Q 1
/* let extPass = "123abc";
let passwd = "";
do {
  passwd = prompt("write a password");
  if (extPass === passwd) {
    console.log("password is match");
    break;
  }
} while (extPass !== passwd); */

// Q 2

/* let i = Number(prompt("write a number"));

do {
  console.log(i);
  i--;
} while (i > 0);
 */

// Q 3

/* let playAgain = "";
function guesGame() {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  let guesNum = "";
  do {
    guesNum = Number(prompt("Guess your lucky number"));
    if (randomNum != guesGame) {
      alert("keep guessing");
    }
  } while (randomNum !== guesNum);
  alert("Good Job!");
}

do {
  guesGame();
  playAgain = prompt('Do you want to play again ? write "yes" or "No"');
} while (playAgain == "y" || playAgain == "yes" || playAgain == "Y"); */

// Q 4
/* let minNumber;
function largestNum() {
  let num1 = Number(prompt("Enter a 1st number"));
  let num2 = Number(prompt("Enter a 2nd number"));
  let num3 = Number(prompt("Enter a 3rd number"));

  console.log(Math.max(num1, num2, num3));
  minNumber = Math.min(num1, num2, num3);
}

do {
  largestNum();
} while (minNumber > 0); */

// Q 5

// let reverseString = "";

// function myString() {
//   let str8 = prompt("type your favourite color");
//   for (let i = str8.length - 1; i >= 0; i--) {
//     reverseString += str8[i];
//   }
//   console.log(reverseString);
// }

// do {
//   myString();
// } while (reverseString !== "stop");
