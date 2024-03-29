'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, mov] of movements.entries())
// {
//   if (mov > 0)
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   else
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
// }

// console.log(`---- FOR EACH ----`)

// movements.forEach(function(mov, i, arr)
// {
//   if (mov > 0)
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   else
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map)
// {
//   console.log(`${key}:  ${value}`);
// });

// const currenciesSet = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR']);

// currenciesSet.forEach(function(value, key, set)
// {
//   console.log(`${key}: ${value}`);
// });

// const checkDogs = function(dogsJulia, dogsKate)
// {
//   const copyJulia = dogsJulia.slice(1, -2);
//   const both = [...copyJulia, ...dogsKate];
//   both.forEach(function(value, i)
//   {
//     if (value > 2)
//       console.log(`Dog number ${i + 1} is an adult, and is ${value} years old"`);
//     else
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// };

// let julia = [3, 5, 2, 12, 7];
// let kate = [4, 1, 15, 8, 3]

// let julia = [9, 16, 6, 8, 3];
// let kate = [10, 5, 6, 1, 4];

// checkDogs(julia, kate);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurTousd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurTousd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements)
//   movementsUSDfor.push(mov * eurTousd);
// console.log(movementsUSDfor);

// const moveDescrip = movements.map(
//   (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);

// console.log(moveDescrip);

// const user = 'Steven Thomas Williams';
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(function(name)
//   {
//     return name[0];
//   })
//   .join('');


// const createUserNames = function(acc)
// {
//   acc.forEach(function(acc)
//   {
//     acc.username = acc.owner
//     .toLocaleLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   });
// };

// console.log(createUserNames(accounts));
// console.log(accounts);

// const deposits = movements.filter(function(mov)
// {
//   return mov > 0;
// })

// console.log(movements);
// console.log(deposits);

// const depositedFor = [];

// for (const mov of movements) if (mov > 0 ) depositedFor.push(mov);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

//accumulator is like a snowball
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// let sum = 0;

// for(const mov of movements)
// {
//   console.log(`Sum: ${sum}`);
//   sum += mov;
// };

// console.log(sum);

// =========== CODING CHALLENGE 2 =============

// const moveDescrip = movements.map(
//   (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);

// const calcAveragheHumanAge = function(ages)
// {
//   const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + (age * 4));
//   const filteredAges = humanAges.filter(humanAge => humanAge >= 18);
//   let sum = filteredAges.reduce((acc, age) => acc += age, 0);
//   return sum / filteredAges.length;
// };

// console.log(calcAveragheHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAveragheHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUssd = 1.1;


// const filteredMovements = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * euroToUssd)
//   .map((mov, i, arr) => 
//   {
//     console.log(mov);
//     mov * euroToUssd
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(filteredMovements);


// =========== CODING CHALLENGE 3 =============

// const calcAveragheHumanAge = function(ages)
// {
//   const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + (age * 4));
//   const filteredAges = humanAges.filter(humanAge => humanAge >= 18);
//   let sum = filteredAges.reduce((acc, age) => acc += age, 0);
//   return sum / filteredAges.length;
// };

// const calcAveragheHumanAge = ages => ages
//   .map(age => age <= 2 ? 2 * age : 16 + (age * 4))
//   .filter(humanAge => humanAge >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAveragheHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAveragheHumanAge([16, 6, 10, 5, 6, 1, 4]))

// =========== FIND =============

// console.log(movements.find(mov => mov < 0));

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// ================= ALL  ARRAY METHODS =================

/* 
   ============= TO MUTATE ORIGINAL ARRAY ================

  .PUSH
  .UNSHIFT
  .POP
  .SHIFT
  .SPLICE
  .REVERSE
  .SORT
  .FILL

  ============= TO CREATE A NEW ARRAY ================

  .MAP
  .FILTER
  .SLICE
  .CONCAT
  .FLAT
  .FLATMAP

  ============= TO FIND A INDEX ================

  .INDEXOF
  .FINDINDEX

  .FIND

  ============= TO FIND A IF AN ARRAY INCLUDES A CERTAIN ELEMENT ================

    .INCLUDES
    .SOME
    .EVERY

  ============= TO TRANSFORM AN ARRAY TO A VALUE ================

  .REDUCEC
  .FOREACH (DOESNT CREATE A NEW ARRAY)

*/


// ======================================ARRAY EXCERCISES ===========================================

// exercise 1.

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDepositSum);

// // exercise 2.

// const numDeposits = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

//   console.log(numDeposits);

// // exercise 3.

// const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements)
//   .reduce((sums, cur) =>
//   {
//     cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
//     // sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//     return sums;
//   } , 
//   {deposits: 0, withdrawals: 0});

// console.log(deposits, withdrawals);

// // exercise 4.

// const converTitleCase = function(title)
// {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const capitalize = string => string[0].toUpperCase() + string.slice(1); 

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => exceptions.includes(word) ? word : capitalize(word))
//     .join(' ')
//   return capitalize(titleCase);
// };

// console.log(converTitleCase('this is a long title'));
// console.log(converTitleCase('this is a LONG title but not too long'));
// console.log(converTitleCase('and here is another title with an EXAMPLE'));

// ============================= CODING CHALLENGE ============================

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

// CHALLENGE 1.

const calcRecommendedPortion = dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));

console.log(dogs);

// CHALLENGE 2.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood * 0.90 ? 'too much' : 'not enough'} food`);

// dogs.forEach(function(dog)
//   {
//     if (dog.owners.includes('Sarah') && dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10)
//       console.log("Sarah's dog is eating the proper portions");
//     else if (dog.owners.includes('Sarah') && dog.curFood > dog.recFood * 0.90)
//       console.log("Sarah's dog is eating too much food");
//     else if (dog.owners.includes('Sarah') && dog.curFood < dog.recFood * 1.10)
//       console.log("Sarah's dog is eating not enough food");
//   });

// CHALLENGE 3.

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dogs => dogs.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dogs => dogs.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// CHALLENGE 4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// CHALLENGE 5.

console.log(dogs.some(dog => dog.curFood === dog.recFood));

// CHALLENGE 6.

console.log(dogs.some(dog => dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10)));

// CHALLENGE 7.

const okayDogs = dogs.filter(dog => dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10));
console.log(okayDogs);

// CHALLENGE 8.

const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);