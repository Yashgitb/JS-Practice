//Primitive data types -- which are apsses dy value

// 7 types : String , Number , Boolean , Null , BigInt, Symbol , undefined


//Non Primitive data types  -- which are passed by reference

//Arrays, Objects, Functions


const outsidetemp = null
const isLoggedIn = false
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 7527639092020n

console.log(bigNumber);
console.log(typeof bigNumber);

const heros = [" shaktiman ",  " naagraj ", " doga "]



let myObj = {

   age:22,
   name:"Yash"

}

const myfunction = function(){

    console.log("Hello World");
    
}




console.log(myfunction);

console.log(myObj);


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes

//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

