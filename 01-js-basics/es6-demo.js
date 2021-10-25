// ES6 | ES2015 | Latest JavaScript | Next-Gen JavaScript

// Arrow functions - ( args => body ) Sweet, short and clean syntax
// - With Curly braces : multiple lines in function body
// - Without Curly braces : one-liner function body

// ES5 way

// var numbers = [1,2,3,4,5];

// // var doubleArray = numbers.map(function(value){
// //     return value * 2;
// // })

// var doubleArray = numbers.map( value => {
//     console.log(value);
//     return value * 2;
// } )
// console.log(doubleArray);

// numbers.forEach(value => {
//     console.log(value);
// });












// Destructuring - unpacking the collection (Array, Object)
// - immutable changes in collection

// var beverages = ["tea", "coffee", "lemonade"];

// var [d1, d2, d3, d4] = beverages;

// console.log(d2, d4);            // "coffee", undefined

// d3 = "Mocktail"

// console.log(beverages[2])


// var myModule = {
//     drawText : text => console.log("Drawing "+  text),
//     drawCircle : function(r){console.log(Math.PI * r * r)},
//     drawRect : function(w,l){console.log(2 * w * l)}
// }

// var {drawRect : dr, drawCircle : dc, drawText : dt} = myModule;

// dt("SAmple text");

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     address : {
//         city : "Mumbai",
//         street : "201 Main Road, Malad (E)"
//     },
//     friends : ["Bam", "Baz"]
// }

// var {
//     firstName,
//     lastName,
//     address : {
//         city,
//         street
//     },
//     friends : [f1, f2]
// } = user;

// console.log(firstName, city, f2)

// city = "Bengaluru"

// var {city , street} = user.address;


// Nested Destructuring

// var users = [
//     { email : "test1@test.com", age : 32},
//     { email : "test2@test.com", age : 33},
//     { email : "test3@test.com", age : 34},
// ]

// var [
//     { email : e1, age : a1},
//     { email : e2, age : a2},
//     { email : e3, age : a3}
// ] = users;

// console.log(e3, a2); 



// Block Scoping - restrict the variable scope to the nearest block - { ... }
// let
// const

// function display(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);             // ?
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// display([1,2,3]);

// const USERNAME = "Foo";

// USERNAME = "Bar";

// const user = {
//     name : "Foo"
// }

// user = {
//     name : "Bar"
// }

// user.name = "Bar";

// console.log(user.name);     // ?


// const fruits = ["apple", "banana"]

// fruits = ["apple", "banana", "oranges"];

// fruits.push("oranges");

// console.log(fruits);        // ?



// Template Literals : "" | '' | `` (back tick)
// - embedd variables within strng without (+)
// - write multiline string without (\n)

// let username = "Foo";
// let age = 34;
// let str1 = `Hello ${username}!!
// I am ${age} years old today.`;
// console.log(str1);









// Default Parameter

// const fn = function(){}

const fn = (state = {counter : 0}) => {
    console.log(state.counter)
}

fn({counter : 101})

fn();










// Spread / Reast
// Module import and export
// Promise / Async...await