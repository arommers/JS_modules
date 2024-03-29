'use strict';

// ------------------------
// 129. default parameters
// ------------------------

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers)
// {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// ------------------------------------------------
// 130. Passing arguments. Value versus References
// ------------------------------------------------



// Passing a primitive value means copying it
// Passing an object happens by reference.

// const flight = "LH234";
// const adri = {
//     name: "Adri Rommers",
//     passportNR: 1467763
// };

// const checkIn = function (flightNum, passenger)
// {
//     flightNum = "LH999";
//     passenger.name = "Mr. " + passenger.name;
//     if (passenger.passportNR === 1467763)
//         alert("Checked in");
//     else
//         alert("Wrong passport!")
// }

// checkIn(flight, adri)
// console.log(flight);
// console.log(adri);

// // Is same as doing...
// const flightNum =  flight;
// const passenger = adri;

// const newPassport = function(person) {
//     person.passportNR = Math.trunc(Math.random() * 1000000000000);
// }

// newPassport(adri);
// checkIn(flight, adri);

// ------------------------------------------------
// 131 First-Class and High-Order Functions
// ------------------------------------------------

// first class function are a concept. All functions are values
// Higher order function are functions that receive another functions as an argument, return a new function, or both

// ------------------------------------------------
// 132 Functions Accepting Callback Functions
// ------------------------------------------------

// oneWord and upperFirstWord are callback functions

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return ([first.toUpperCase(), ...others].join(' '));
// }

// // Higher Order Function
// const transformer = function (str, func) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${func(str)}`);
//     console.log(`Transformed by ${func.name}`);
// }

// transformer("javascript is the best", upperFirstWord);
// transformer("javascript is the best", oneWord);

// const highFive = function() {
//     console.log("🙌".repeat(5));
// }

// document.body.addEventListener('click', highFive);

// ['Adri', 'Snoet', 'Poes'].forEach(highFive);

// ------------------------------------------------
// 133 Functions Returning Functions
// ------------------------------------------------

// const greet = function(greeting) {
//     return (function(name) {
//         console.log(`${greeting} ${name}`)
//     });
// }

// // greeterhey stores the function that is returned from greet
// const greeterHey = greet('hey');
// greeterHey('Adri');
// greeterHey('Poes');

// greet('Hello')('Adri');

// // The greet function as arrow functions
// const arrowGreet = greeting => name => console.log(`${greeting} ${name}`);

// arrowGreet('Hello')('Snoet');

// ------------------------------------------------
// 134 Call and Apply
// ------------------------------------------------

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline}, flight ${ this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name });
//     }
// }

// lufthansa.book(123, 'Adri Rommers');
// lufthansa.book(666, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'EuroWings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;[]

// // invalid version
// // book(23, 'Sarah Williams');

// //Call method

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 123, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Line',
//     iataCode: 'LX',
//     bookings: []
// };

// book.call(swiss, 583, 'Snoet de Poes');

// // Apply method

// const flightData = [583, 'George'];
// book.apply(swiss, flightData);
// book.call(swiss, ...flightData);
// console.log(swiss);

// // Bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(123, 'Stephen Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Adri Rommers');
// bookEW23('Poesesich');

// // With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function()
// {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// // const addTax = (rate, value) => value + value * 0.23;

// console.log(addVat(100));
// console.log(addVat(23));

// const poll =
// {
//     question: 'What is your favorite programming language?',
//     options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer()
//     {
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`));

//         console.log(answer);

//         typeof answer === 'number' && answer < this.options.length && this.answers[answer]++;

//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array')
//     {
//         if (type === 'array')
//             console.log(this.answers);
//         else if (type === 'string')
//             console.log(`Poll results are ${this.answers.join(', ')}`)
//     }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({answers: [5, 2, 3] });



// const runOnce = function()
// {
//     console.log('This will never run again!');
// };
// runOnce();

// // Immediately invoked function expressions
// (function()
// {
//     console.log('This will never run again!');
// })();

// (() => console.log('This will never run again!'))();

// CLOSURES

// const secureBooking = function ()
// {
//     let passengerCount = 0;

//     return function()
//     {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker)

// // EXAMPLE 1

// let f;

// const g = function()
// {
//     const a = 23;
//     f = function ()
//     {
//         console.log(a * 2);
//     }
// }

// const h = function ()
// {
//     const b = 777;
//     f = function ()
//     {
//         console.log(b * 2);
//     }
// }

// // f closes over g
// g();
// f();
// console.dir(f);


// // Re-assigned f function. it closed over the vriable environment of h
// h();
// f();
// console.dir(f);

// // EXAMPLE 2

// const boardpassengers = function (n, wait)
// {
//     const perGRoup = n / 3;

//     setTimeout(function()
//     {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are three groups, each with ${perGRoup} passengers`);     
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGRoup = 1000;
// boardpassengers(180, 3);

(function()
{
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function()
    {
        header.style.color = 'blue';
    });
})();