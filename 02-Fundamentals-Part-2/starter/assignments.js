'use strict'

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

// function describeCountry(country, population, capitalCity)
// {
//     return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
// }

// const Japan = describeCountry('Japan', 130, 'Tokyo\n');
// const Peru = describeCountry('Peru', 20, 'Lima\n');
// const USA = describeCountry('USA', 240, 'Washington DC\n');

// console.log(Peru, Japan, USA);

/*======================================================================*/

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

// let china = 1441;
// let holland = 18;
// let sweden = 6;

// function percentageOfWorld1(population)
// {
//     return ((population / 7900) * 100);
// }

// // china = percentageOfWorld1(china);
// // holland = percentageOfWorld1(holland);
// // sweden = percentageOfWorld1(sweden);
// // console.log(china, holland, sweden);

// const percent2 = function(population)
// {
//     return ((population / 7900) * 100);
// }

// let chinapop = percent2(china);
// let hollandpop = percent2(holland);
// let swedpop = percent2(sweden);
// console.log(chinapop, hollandpop, swedpop);

/*======================================================================*/

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

// const percentageOfWorld3 = population => (population/ 7900) * 100;

// let chinapop = percentageOfWorld3(china);
// let hollandpop = percentageOfWorld3(holland);
// let swedpop = percentageOfWorld3(sweden);
// console.log(chinapop, hollandpop, swedpop);

/*======================================================================*/

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

// const description = function(country, population)
// {
//     const percent = percentageOfWorld1(population);
//     const description = (`${country} has ${population} million people, which is about ${percent}
//     of the world's population`);
//     console.log(description);
// }

// description('china', 1441);
// description('usa', 241);
// description('sweden', 5);

/*======================================================================*/

// Challenge 1
/* Write your code below. Good luck! 🙂 */
// const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3; 

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas)
// {
//     if (avgDolphins > avgKoalas && avgDolphins > avgKoalas * 2)
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     else if (avgKoalas > avgDolphins && avgKoalas > avgDolphins * 2)
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     else
//         console.log('No team wins');
// }

// checkWinner(scoreDolphins, scoreKoalas);

/*======================================================================*/

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice. 
//    You may use the values you have been using previously. 
//    Store this array into a variable called 'populations'
// 2. Log to the console whether the array has 4elements or not(trueorfalse)
// 3. Create an array called 'percentages' containing the percentages of the
//    world population for these 4 population values. 
//    Use the function 'percentageOfWorld1'
//    that you created earlier to compute the 4 percentage values

// const populations = [1441, 241, 18, 5];
// console.log (populations.length === 5);

// const percentages = [
// percentageOfWorld1(populations[0]),
// percentageOfWorld1(populations[1]),
// percentageOfWorld1(populations[2]),
// percentageOfWorld1(populations[populations.length -1])
// ];
// console.log(percentages);

/*======================================================================*/

// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'

// const neighbours = ['germany', 'belgium'];
// console.log(neighbours);
// neighbours.push('utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes('germany'))
//     console.log('Probably not a central European country :D');
// neighbours[neighbours.indexOf('germany')] = 'republic of germans';
// console.log(neighbours);

/*======================================================================*/

// const calcTip = function(value)
// {
//     if (value >= 50 && value <= 300)
//         return (value * 0.15);
//     else
//         return (value * 0.20);
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const totals = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2],
//     ];
// console.log(bills);
// console.log(tips);
// console.log(totals);

/*======================================================================*/

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

const myCountry =
{
    country: 'The Netherlands',
    capital: 'Amsterdam',
    language: 'Dutch',
    population: 18,
    neighbours: ['Germany', 'Belgium'],
};

// console.log(myCountry);

/*======================================================================*/

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people,
${myCountry.neighbours.length} neigbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry);
myCountry['population'] -= 2;
console.log(myCountry);



/*======================================================================*/
