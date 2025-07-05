//Dates

let mydate = new Date()
console.log(mydate.toString());

console.log(mydate.toDateString());

console.log(mydate.toISOString());

console.log(mydate.toLocaleString());

console.log(typeof mydate);


// let myCreatedDate = new Date(2023 , 0 , 23)
// let myCreatedDate = new Date(2023 , 0 , 23, 5 , 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getFullYear());


// `${newDate.getDay()} and the time is `

let result =  newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "UTC"
});

console.log(result);












