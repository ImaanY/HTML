'use strict';

let myBigNumber = 123e5; //12300000
let mySmallNumber = 123e-5; //0.00123

let answer1 = "It's alright";             
let answer2 = "He is called 'Johnny'";    
let answer3 = 'He is called "Johnny"';   
console.log(answer1 + " " + answer2 + " " + answer3)

let myName = "Ollie Tabooger"; //string
let myNumber = 20; //number
let myBigInt = 1234567891234567891234567891234567890n; //BigInt
let myBool = false; boolean
let myAge = null; //null value
let dob; //undefined
let myObject = {firstName:"Felix", lastName:"Cited"}; //object

let myBigNumber = 123e5; //12300000
let mySmallNumber = 123e-5; //0.00123

let cars = ["BMW","Mercedes","Audi"];

let number; //number is now undefined.
let number = 1234; //number is a number
let number = true; //number is now a boolean
let number = "some string"; //number is now a string

let x = "";
typeof(x);// will return String
let y = "String";
typeof(y) // will return string also.
let z;
typeof(z) //Will have a value of undefined and a type of undefined.
let w = null;
typeof(w);// Will return Object and not of type null as expected.
let myObj = {firstName:"Felix", lastName:"Cited"};
typeof(myObj); //Will return Object.