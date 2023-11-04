// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// const y = 18;

// const calAge = (x) => 2037 - x;

// console.log(calAge(x));

// console.log(calAge(y));

// Challenge 1

const array = [17, 21, 23];

const printForecast = function(array)
{
    
    let result = '';
    for (let i = 0; i < array.length; i++)
    {
        result += `${array[i]}°C in ${i + 1} days ... `;
    }
    console.log('... ' + result);
}

printForecast(array);
