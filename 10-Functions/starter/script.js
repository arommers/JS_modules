'use strict';


const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('A707'[0]);
console.log(airline.length);
console.log('A707'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(2));
console.log(airline.slice(0, 2));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat)
{
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E')
        console.log('Sad');
    else
        console.log('Lucky');

};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');