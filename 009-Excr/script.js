let myVar = 5;
console.log(myVar);

// =====================

let myString = 'Hello, World!';
console.log(myString);

// ======================

let num1 = 5;
let num2 = 10;

let userNum = Number(prompt('choose any number'));
console.log(num1 + num2 + userNum);

// ======================

let myBoolean = true;

if (myBoolean) {
    console.log("It's trye!");
} else {
    console.log("It's false!");
}

// ======================

let chooseNum = Number(prompt('choose any number'))

let checkNum = chooseNum % 2;

if (checkNum === 0) {
    console.log('it is even number');
} else {
    console.log('it is odd number');
}

// ======================

let firstString = 'My name is ';
let secondString = 'Kashif';

console.log(firstString + secondString);

// =======================

let multiNumb1 = 5;
let multiNumb2 = 20;

console.log(multiNumb1 * multiNumb2);

// ========================

let myPassword = "dskuOwjs12dsLKlM";

let writePassword = prompt('Write your password')

if (myPassword === writePassword) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// =======================

let guesNumber1 = Number(prompt('choose 1st number'));
let guesNumber2 = Number(prompt('choose 2nd number'));
let guesNumber3 = Number(prompt('choose 3rd number'));

if (guesNumber1 > guesNumber2 && guesNumber1 > guesNumber3) {
    console.log('guesNumber1 is largest Number');
} else if (guesNumber2 > guesNumber1 && guesNumber2 > guesNumber3) {
    console.log('guesNumber2 is largest Number');
} else {
    console.log('guesNumber3 is largest Number');
}

// =====================

let usrString1 = prompt('please write down any word');
let usrString2 = prompt('please write down any word');

if (usrString1 === usrString2) {
    console.log("The strings are equal");
} else {
    console.log("The strings are not equal");
}

// =====================

