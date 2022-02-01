`use strict`;

let age = 45;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}

//ternary-if statement


let result = age >= 50 ? "50 or over" : "under 50";
console.log(result);
