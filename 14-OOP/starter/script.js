'use strict';


/* =============== 209. Constructor functions and the new operator  =============== */

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
const jack = new Person('jack', 1975);

console.log(matilda, jack);
console.log(jonas instanceof Person);

/* =============== 210. Prototypes =============== */

console.log(Person.prototype);

Person.prototype.calCage = function()
{
    console.log(2037- this.birthYear);
};

jonas.calCage();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);
console.log(matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

/* =============== 212. Prototypal inheritance on Built in objects =============== */

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

const arr = [1, 2, 2, 3, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function()
{
    return [...new Set(this)]; 
}

console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir('h1');
console.dir(x => x + 1);

/* =============== 213. coding challenge 1 =============== */

const Car = function(make, speed)
{
    this.make   = make;
    this.speed  = speed;
};

Car.prototype.accelerate = function()
{
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.brake = function()
{
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
};

const firstCar = new Car('poop', 80);
console.log(firstCar);
firstCar.accelerate();
firstCar.accelerate();
firstCar.brake();
firstCar.accelerate();

const secondCar = new Car('piss', 120);
console.log(firstCar);
firstCar.accelerate();
firstCar.accelerate();
firstCar.brake();
firstCar.brake();
firstCar.brake();

/* =============== 214. ES6 Classes =============== */
