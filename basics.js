"use strict"; // to enable strict mode

// comments
console.log("Hello World");
// get input from user
// prompt("Enter your name");

// Variables
var firstName = "Maitrayee"; // declaration of variable
console.log(firstName);

// change value of variable
firstName = "Mili";
console.log(firstName);

// let keyword
let lastName = "Khalasi"; // Recommanded to declare variable using let keyword
console.log(lastName);

// Difference between var & let
var city = "pune";
var city = "mumbai"; // no error

// The let keyword does not allow you to declare a variable with the same name more than once.
// let city1 = "pune";
// let city1 = "mumbai"; // error

// Constansts
// Can not be undefined
const tech = "JavaScript";

// Strings
// - Strings are immutable in javascript
// - Strings are indexed
// - Strings are array of characters

console.log(lastName[0]); // K
console.log(lastName.length); // To get length of string

// Methods of string
let name = "      Maitrayee Khalasi    ";

// trim() - removes whitespace from both ends(only) of a string & return a new string
let newName = name.trim();
console.log(newName);

// toUpperCase() - converts a string to uppercase letters & returns a new string
// toLowerCase() - converts a string to lowercase letters & returns a new string
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());

// slice(start_index, end_index+1) - extracts a part of a string & returns a new string

// String concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);

// template string
let aboutMe = `My name is ${fullName}. I am learning ${tech}`;

// typeof operator
console.log(typeof name); // string
console.log(typeof 10); // number

// Type conversion
let num = 10;
console.log(typeof num); // number
num = String(num);
console.log(typeof num); // string
num = Number(num);
console.log(typeof num); // number
// String to number(shortcut)
let Snum = +"10"
console.log(typeof Snum); // number

// Undefined
let undefinedVar;
console.log(undefinedVar); // undefined
console.log(typeof undefinedVar); // undefined

// Null - no value
let nullVar = null;
console.log(nullVar); // null
console.log(typeof nullVar); // object

// BigInt
// Cannot perform operation between BigInt & Number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
let bigInt = 1234567890123456789012345678901234567890;
console.log(bigInt);
bigInt = BigInt(1234567890123456789012345678901234567890);
console.log(bigInt);

// == vs ===
console.log(10 == "10"); // true, checks only value
console.log(10 === "10"); // false - strict equality, check datatype also

// != vs !==
console.log(10 != "10"); // false, checks only value
console.log(10 !== "10"); // true - strict inequality, check datatype also

// ternary operator ?:
// condition ? expression1 : expression2

// and or operator && ||


