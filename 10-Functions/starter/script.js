'use strict';


const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log('A707'[0]);
// console.log(airline.length);
// console.log('A707'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(2));
// console.log(airline.slice(0, 2));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat)
// {
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E')
//         console.log('Sad');
//     else
//         console.log('Lucky');

// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization
const passenger = "aDRi";
const pLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + pLower.slice(1);
console.log(passengerCorrect);

// Check e-mail

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimEmail = lowerEmail.trim();

console.log(trimEmail);

const normalEmail = loginEmail.toLowerCase().trim();

console.log(normalEmail);
console.log(email === normalEmail);

// replacing

const prizeGB = '512,79£'
const prizeUS = prizeGB.replace(',', '.').replace('£', '$');

console.log(prizeUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// methods that return booleans

const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('BOEING'));
console.log(plane2.startsWith('Air'));
console.log(plane2.startsWith('neo'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo'))
    console.log('Part of the New Airbus family');

// Practice

const checkBaggage = function(items)
{
    const baggage = items.toLowerCase();
    if (baggage.includes('gun') || baggage.includes('knife'))
        console.log('Not allowed on board');
    else
        console.log('Welcome on board');
}

checkBaggage('I have some Food, a laptop and a pocket Knife');
checkBaggage('Socks and a camera');
checkBaggage('Snacks and gun for protection')
