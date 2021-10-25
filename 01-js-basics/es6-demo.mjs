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

// const fn = (state = {counter : 0}) => {
//     console.log(state.counter)
// }

// fn({counter : 101})

// fn();










// Spread / Rest : (...)
// - Spread : spreads the collection into individual items;
    // : Collection - Array | Object
// - Rest : creates the collections from individual items
    // : Always comes in function argument list

    // const arr = [3,4,5];
    // const newArray = [1,2,...arr,6,7,8];
    // console.log(newArray);          // [1,2,[3,4,5],6,7,8]

    // const user = {
    //     email : "test@test.com",
    //     isAdmin : false
    // }

    // const newUser = {
    //     ...user,
    //     age : 32,
    //     isAdmin : true
    // }

    // console.log(newUser);               // { email : 'test@test.com', age : 32, isAdmin : true}

    // const newObject = Object.assign({}, {firstName : "Foo"}, {lastName : "Bar"}, {age : 32}, {email : "test@tes.com"})

    // console.log(newObject);

    // const users = [
    //     {firstName : "sumit"},
    //     {firstName : "krati"}
    // ]

    // const newUsers = [...users]
    // console.log(newUsers)

    // let users = {
    //     user1 :{
    //         firstName : "Foo"
    //     },
    //     user2 : {
    //         firstName : "Bar"
    //     }
    // }

    // let allUsers = {
    //     ...users,
    //     user3 : {
    //         firstName : "Bam"
    //     }
    // }
    // console.log(allUsers);





    // const fn = (email, ...args) => {
    //     console.log(args[0]);               // 32
    // }

    // fn("test@test.com")
    // fn("test@test.com", 32)
    // fn("test@test.com", 32, true)
    // fn()




















// Module import and export
// - Data hiding 
// - Encapsulation / Abstraction

// CommonJS Module
// - module.exports - to export
// - require() - to import
// const {sum, mul} = require("./modules/math");
// const { getFortune, MAGIC_NUMBER } = require("./modules/fortune");

// console.log(sum(4,5))
// console.log(mul(4,5))

// console.log("My Lucky Number Today : ", MAGIC_NUMBER)

// console.log(getFortune())



// ES6 import / exports
// - export keyword - to export
// - import statement - to import 


// import { getState } from './modules/state.mjs';

// console.log(getState());












// Promise / Async...await
// - 3 States -> Pending -> Resolved (SUCCESS) -> Rejected (FAILURE)
    // XHR Call -> 2S -> Response - .then()
    // XHR Call -> 2s -> Error - .catch(error)

// - Producer Code

const dummyFn = (arr) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(arr.length > 2){
                resolve({message : "SUCCESS"})
            }else{
                reject(new Error("Something bad happened"))
            }
        }, 3000)
    });

    return promise;
}

// - Consumer Code

const callPromise = async () => {
    try{
    const result = await dummyFn([1,2])
    console.log(result)
    }catch(err){
        console.log("ERROR : ", err)
    }
}


// const callPromise = () => {
//     console.log("START")
//     dummyFn([1,2]).then(response => {
//         console.log(response);
//     }).catch(err => {
//         console.log(err)
//     })
//     console.log("END")
// }

callPromise();