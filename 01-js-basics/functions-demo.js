// FUNCTIONS - are not only syntax, but can be values also. First-class citizens in JavaScript
// Nested function : able to access variables from outer scope
// Function Hoisting
// Higher Order Functions - Error first, callback last
// IIFE - Immediately Invoked Function Expressions
// Function creates Lexical Scope - binds with outer scope
// Scope chaining

// var y =101;

// (function () {
//     var x = 101;
// })()

// Block Scope - let /const




// var x = 301;

// function b(x){
//     console.log("B : ", x)          // 301
// }

// function a(){
//     // var x = 201;
//     function c(){
//         console.log("C : ",x)
//     }
//     b(x)
//     c()
// }

// a();









// function someFn(){
//     (function () {
//       console.log("IIFE");
//     })();
// }

// someFn();


// function sayHello(url, cb){
//     fetch(url).then(function(response){
//         return response.json()
//     }).then(function(posts){
//         cb(null, posts)
//     }).catch(function(err){
//         cb(err)
//     })
// }

// sayHello("https://jsonplaceholder.typicode.com/posts", function(err, data){
//     if(err){
//         console.error(err)
//     }
//     console.log("Good noon!", data);
// })

// JavaScript Engine runs in 2 phases
// - Creational Phase -> All variable and function takes place into memory,
//      : JavaScript engine assigns special value to them; called 'undefined'
// - Execution Phase -> Assignment, return

// function mystry(){
//    function chooseNumber (){
//         return 7;
//     }
//     return chooseNumber;
//     function chooseNumber (){
//         return 12;
//     }
// }

// var chooseNumber = mystry()

// console.log(chooseNumber());        // 12 | Error | 7

// console.log(mystry())           // [Function : chooseNumber]

// Syntax
// function add () {return ;}

// Anonymous Functions
// Function Expression
// var addition = function(num1, num2){
//     return num1 + num2;
// }

// console.log(addition(2,5));          // error | null | no output | undefined

// console.log(add(3,5));


// callSomeFn()

// function callSomeFn(){
//     console.log("Calling some function")
// }




(argsList) => {

}

() => "xyz"

let arr = [1,2,3,4]
let newArr1 = arr.map( value => value * 10)            // [10, 20, 30, 40]
const newArr = filter(value => value > 2);          // [3,4]
const item = find(value => value === 2)         // 2
const position = findIndex(value => value === 2 )      // 1
every
some
