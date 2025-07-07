let obj = new Object;

obj.firstname ="Yash";
obj.lastname ="Pal";
obj.age = 50;
obj.gender = "Male";

console.log(obj);

let obj1 = {};
obj1.firstname ="Yash";
obj1.lastname ="Pal";
obj1.age = 50;
obj1.gender = "Male";

console.log(obj1);


let person = {

firstName: "Yash",
lastName: "Pal",
age: 50    
}

let x = person;

x.age = 10;
console.log(person);

// Object Properties

person.nationality = "Indian";

console.log(person);

delete person.nationality;

console.log(person);

//Nested onjects
person.myCars = {
    Car1:"Nexon",
    Car2:"Punch",
    Car3:"Dzire"
}

console.log(person.myCars.Car2);
