`use strict`;

let a = 50;

while (a <= 100){
    a++;

    console.log(`a = ${a}`);
} 

console.log(" ")

let b = 10;

while (b <= 50) {
    if (b % 2 == 0 ){
    console.log("-");
    } else {
        console.log("*")
    }
    b++;
}