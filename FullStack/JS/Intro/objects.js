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

// add more properties
mathmod.sub = function(a, b) {return a-b;};
let sub = mathmod.sub(10, 5);
console.log(sub);


// delete a property
delete mathmod.sub;

console.log(mathmod);

// nested objects
let student = {
   name: 'rishabh',
   roll: 55,
   age: 95,
   address: {
      city: 'bombay',
      pincode: 0o12345,
   },
};
// access nested data
console.log(student.address.city);

// this keyword
// this refers to the object that is calling the method, means we can access the object's properties

let user1 = {
   name: 'john',
   greet: function () {
      console.log('hello '+ this.name);
   },
};
user1.greet();

// for-in loops, 
for(let key in user1) {
   console.log(key, user1[key]); // key->property name, person[key]->value
}


// js objects are stored by reference not by value
let obj1 = {value:10,};
let obj2 = obj1;
// now they both point to the same mem location
obj2.value = 20;

console.log(obj1.value); // obj1's value property is effected

// to copy properly we do
let obj3 = Object.assign({}, obj1);
obj3.value = 30;
console.log(`obj1.value: ${obj1.value}, obj3.value ${obj3.value}`);

// in more modern way
let obj4 = {...obj1};
console.log(obj4.value);



