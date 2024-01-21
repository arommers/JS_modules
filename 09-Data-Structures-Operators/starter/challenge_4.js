// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):

// underscoreCase   ✅
// firstName        ✅✅
// someVariable     ✅✅✅
// calculateAge     ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!

'use strict';

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function()
// {
//     const   text = document.querySelector('textarea').value;
//     const   rows = text.split('\n');
//     for (const [i, row] of rows.entries())
//     {
//         const [first, second] = row.toLowerCase().trim().split('_');
//         const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
//         console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//     }
// });


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const rmDigits = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+"))
{
    const [first, second, third, fourth] = flight.split(';');
    console.log(`${first.startsWith('_Delayed') ? '✅' : ''} ${first.replaceAll('_', '')} from ${rmDigits(second)} to ${rmDigits(third)} (${fourth.replace(':', 'h')})`.padStart(53));
}
