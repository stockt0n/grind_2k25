'use strict';

// an object in javascript is a way to store related data in key value pairs.

// sample object
let person = {
   name: "rishabh",
   age: 95,
   hobby: 'javascript'
};
// in this object, 'person' is the main object and 'name', 'age' , 'hobby' are properties
// each property has key value pair

// we can access object property using '.' dot operator.
console.log(person.name);

// bracket notation: useful for when property is dynamic
console.log(person["age"]);

// an object can also store functions, they are called methods
let mathmod = {
   sum: function(a, b) {
      return a+b;
   },
}

let sum = mathmod.sum(5, 10);
console.log(sum);