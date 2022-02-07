'use strict';

let car = new Object();
car["make"] = "Audi";
car["model"] = "A5";
car["carReg"] = "W8M8";

console.log(car) // shows all attributes
console.log(car.make); //show the value of make
console.log(car.model); //show the value of model
console.log(car.carReg); //show the value of carReg

//The object can have new properties added at any time. Known as an expando property.

car.numberOfDoors = 4;
console.log(car.numberOfDoors); //Shows the value referring to number of doors.

//a lot simpler and quicker to declare objects

let car = { make: "Audi", model: "A5", carReg: "W8M8" };

let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "hyundai", model: "i30", carReg: "AB11CDE" }
]
console.log(carPark);