'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest)
//     hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = 'Audio'

// Calling, running or invoking the function

function logger()
{
    console.log("My name is Adri");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return (juice);
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);