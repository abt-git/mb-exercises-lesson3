//----------------------------------------------------------------------------------------------
// Exercise 1

// let name = prompt("Name:", "");
// let surename = prompt("Surename", "");
// console.log(`Hello ${name} ${surename}!`);

//----------------------------------------------------------------------------------------------
// Exercise 2

// let pass = prompt("Passsword:", "");
// let passConf = prompt("Confirm password:", "");

// pass === passConf
//   ? console.log("Password validated")
//   : console.log("Password do not match");

//----------------------------------------------------------------------------------------------
// Exercise 3

// let str = prompt("Input string:", "");

// console.log(str.length);

//----------------------------------------------------------------------------------------------
// Exercise 4

// function reverse(str) {
//   let revStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   console.log(revStr.toLowerCase());
// }

//----------------------------------------------------------------------------------------------
// Exercise 5

// function DrEvil(n) {
//   if (n < 1e6 || n > 1e6) {
//     console.log(`${n} dollars`);
//   } else console.log(`${n} dollars (pinky)`);
// }

//----------------------------------------------------------------------------------------------
// Exercise 6

// function mixUp(a, b) {
//   let mixed = b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
//   console.log(mixed);
// }

//----------------------------------------------------------------------------------------------
// Exercise 7

// function verbing(str) {
//   if (str.length >= 3 && str.slice(str.length - 3, str.length) !== "ing") {
//     str += "ing";
//     console.log(str);
//   } else if (
//     str.length >= 3 &&
//     str.slice(str.length - 3, str.length) == "ing"
//   ) {
//     str += "ly";
//     console.log(str);
//   } else if (str.length < 3) console.log(str);
// }

//----------------------------------------------------------------------------------------------
// Exercise 8

function notBad(str) {
  let strNew = str;
  if (strNew.includes("not") && strNew.includes("bad")) {
    strNew = strNew.slice(0, strNew.indexOf("not")) + "good!";
    console.log(strNew);
  } else console.log(str);
}
