let num1 = 987654311;
let num2 = 987654312;
let num3 = 987654313;
let num4 = 987654321;
let num5 = 987654322;
let num6 = 987654323;

let lastDigit = 0;
function getLastDigit(n) {
  lastDigit = Number(n.toString().slice(-1));
}

let secondLastDigit = 0;
function getSecondLastDigit(n) {secondLastDigit = Number(n.toString().slice(-2, -1));}

function ordinalNumber(n) {

  getLastDigit(n);
  getSecondLastDigit(n);
  
  if(lastDigit === 1 && secondLastDigit != 1) {
    console.log(n + "st")
  } else if(lastDigit === 2 && secondLastDigit != 1) {
    console.log(n + "nd")
  } else if(lastDigit === 3 && secondLastDigit != 1) {
    console.log(n + "rd")
  } else {
    console.log(n + "th")
  }
}

console.log(`let num1 = 987654311;
let num2 = 987654312;
let num3 = 987654313;
let num4 = 987654321;
let num5 = 987654322;
let num6 = 987654323;

let lastDigit = 0;
function getLastDigit(n) {
  lastDigit = Number(n.toString().slice(-1));
}

let secondLastDigit = 0;
function getSecondLastDigit(n) {
  secondLastDigit = Number(n.toString().slice(-2, -1));
}

function ordinalNumber(n) {

  getLastDigit(n);
  getSecondLastDigit(n);
  
  if(lastDigit === 1 && secondLastDigit != 1) {
    console.log(n + "st")
  } else if(lastDigit === 2 && secondLastDigit != 1) {
    console.log(n + "nd")
  } else if(lastDigit === 3 && secondLastDigit != 1) {
    console.log(n + "rd")
  } else {
    console.log(n + "th")
  }
}`);

console.log("");
console.log("");
console.log("");

ordinalNumber(num1);
ordinalNumber(num2);
ordinalNumber(num3);
ordinalNumber(num4);
ordinalNumber(num5);
ordinalNumber(num6);
