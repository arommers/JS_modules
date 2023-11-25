'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta made from ${ing1}, ${ing2} and ${ing3}!`);
  },

  orderPizza: function(mainingredient, ...otherIngredients) {
    console.log(mainingredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log('------ OR ------');

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log(' ' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || null || 23);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------ AND ------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('dough', 'tomato');
}

restaurant.orderPizza && restaurant.orderPizza('poop', 'pee');

// Rest Pattern and Parameters

// 1) Destructuring

// SPREAD, because on the RIGHT hand side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on the left hand side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Objects
// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);

// // 2) Functions
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i];
//   console.log(sum);
// }

// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);

// const pizzaIngredients = ['cheese', 'tomatoes', 'salami'];
// restaurant.orderPizza('Dough', ...pizzaIngredients);
// restaurant.orderPizza('Dough');
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories:
//   tags} = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const {
//   menu = [],
//   starterMenu: starters = [],
// } = restaurant;

// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a, b);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const[x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary)

// [main, secondary] = [secondary, main];
// console.log(main, secondary)

// console.log(restaurant.order(2, 0));

// // Receive two return values from a function
// let [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// [starter, mainCourse] = [mainCourse, starter];
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const[i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default value
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 or more array

// const menu = [...restaurant.mainMenu, ... restaurant.starterMenu];
// console.log(menu);

// // Iterables are array, strings, maps and sets, but not objects

// const str = 'Adri';
// const letters = [...str, ' ', 'R.'];
// console.log(letters);
// console.log(...str);

// Real world examples
// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'),
//   prompt('Let\'s make pasta! Ingredient 2?'),
//   prompt('Let\'s make pasta! Ingredient 3?')
// ];

// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Poop House';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);