'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        // creating new variable with same name as outer scope variable
        const firstName = 'Steven';
        const string = `OH, and you're a millenial ${firstName}`;
        console.log(string);

        function add(a, b) {
            return (a + b);
        }
        // reassinging outeer scope variable with new value
        output = 'NEW OUTPUT';
    }
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Adri';
calcAge(1991);
