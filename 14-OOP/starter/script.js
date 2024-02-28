'use strict';

const Person = function(firstName, birthYear)
{
    this.firstName = firstName;
    this.birthYear = birthYear;

    // never create a method inside a contructor function
    // this.calcAge = function()
    // {
    //     console.log(2037 - this.birthYear);
    // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object {} is created
// 2. The function is called, this = {}
// 3. {} is linked to a prototype
// 4. The function returns the {}

const matilda = new Person('matilda', 2017);
const jack= new Person('jack', 1975);

console.log(matilda, jack);
console.log(jonas instanceof Person);