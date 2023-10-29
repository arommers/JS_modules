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
const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3; 

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas)
{
    if (avgDolphins > avgKoalas && avgDolphins > avgKoalas * 2)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas > avgDolphins && avgKoalas > avgDolphins * 2)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else
        console.log('No team wins');
}

checkWinner(scoreDolphins, scoreKoalas);

/*======================================================================*/

