// Literal : Commonly used

// Data Type :
// Primitive : String, Number, Boolean, Date
// Reference : Array, Objects, Functions

// var books = ["book1", "book2", "book3"]
// var box = {
//     width : 8,
//     height : 6,
//     getVolume : function(){
//         return this.volume;
//     },
//     books : books,
//     addBook : function(book){
//         this.books.push(book)
//     }
// }

// box.volume = box.width * box.height
// // console.log(box.getVolume());   // {}
// box.addBook("book4")
// console.log("Box Books : ", box.books.length);          // 4
// console.log("Books : ", books.length);              // 4


// var userA = {
//     name : "A"
// }

// var userB = userA;

// userB.name = 'B';

// console.log(userA);         // ?

// var a = {

// }
// // var b = {

// // }
// var b = a
// console.log(a === b);           // (===) type and value : 

// console.log("Functions : ", function(){} == function(){})
// console.log(typeof(function(){}))

// var obj = {}











// Constructor : lure the Java People; Similar types of Object

// function Person(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName;
//     this.getFullName = function(){
//         return this.lastName + ", " + this.firstName
//     }
// }

// var personA = new Person("Foo", "Bar")
// console.log(personA.getFullName())
// var personB = new Person("Bam", "Baz")
// console.log(personB.getFullName())

// console.log(personA.constructor);
















// Instance : inheritance between the objects
var Shoe = {
    size : 8
}

var magicShoe = Object.create(Shoe);

console.log(Shoe.isPrototypeOf(magicShoe))          // true
console.log(magicShoe.isPrototypeOf(Shoe))          // false
console.log(Object.prototype.isPrototypeOf(Shoe))       // true
console.log(Object.prototype.isPrototypeOf(magicShoe))       // true

// console.log(magicShoe.hasOwnProperty('size'))       //
// console.log(Shoe.hasOwnProperty('size'))       //








// magicShoe.size = 12;

// console.log("MAGIC SHOE SIZE : ", magicShoe.size)       // 12
// console.log("MAGIC SHOE : ", magicShoe)                 // { size : 12 }
// console.log("SHOE SIZE: ", Shoe)                 // 8

// var str = "Sample String";
// // var str = new String("Sample String");

// console.log("Index of E : ", str.indexOf('e'))

// console.log("Constructor : ", str.constructor)