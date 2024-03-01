'use strict';


/* =============== 209. Constructor functions and the new operator  =============== */

const Person = function(firstName, birthYear)
{
    this.firstName = firstName;
    this.birthYear = birthYear;

    // never create a method inside a contructor function
    // this.calcAge = function()
    // {
    //     console.log(2037 - this.birthYear);
    // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object {} is created
// 2. The function is called, this = {}
// 3. {} is linked to a prototype
// 4. The function returns the {}

const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1975);

console.log(matilda, jack);
console.log(jonas instanceof Person);

/* =============== 210. Prototypes =============== */

console.log(Person.prototype);

Person.prototype.calCage = function()
{
    console.log(2037- this.birthYear);
};

jonas.calCage();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);
console.log(matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

/* =============== 212. Prototypal inheritance on Built in objects =============== */

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

const arr = [1, 2, 2, 3, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function()
{
    return [...new Set(this)]; 
}

console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir('h1');
console.dir(x => x + 1);

/* =============== 213. coding challenge 1 =============== */

const Car = function(make, speed)
{
    this.make   = make;
    this.speed  = speed;
};

Car.prototype.accelerate = function()
{
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.brake = function()
{
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
};

const firstCar = new Car('poop', 80);
console.log(firstCar);
firstCar.accelerate();
firstCar.accelerate();
firstCar.brake();
firstCar.accelerate();

const secondCar = new Car('piss', 120);
console.log(firstCar);
firstCar.accelerate();
firstCar.accelerate();
firstCar.brake();
firstCar.brake();
firstCar.brake();

/* =============== 214. ES6 Classes =============== */

// Class expression

// const PersonCl = class
// {

// };

// Class declaration

class PersonCl
{
    constructor(fullName, birthYear)
    {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to the .protype property
    calCage()
    {
        console.log(2037 - this.birthYear);
    }

    greet()
    {
        console.log(`Hi there I am ${this.fullName}`);
    }

    get age()
    {
        return 2037 - this.birthYear;
    }

    // Set a property that already excists
    set fullName(name)
    {
        if (name.includes(' '))
            this._fullName = name;
        else
            alert(`${name} is not a full name`)
    }

    get fullName()
    {
        return this._fullName;
    }

    // the static method
    static hey()
    {
        console.log('Hi there');
    }
}

const jessica = new PersonCl('jessica davis', 1996);

PersonCl.prototype.greet = function()
{
    console.log(`Hey ${this.firstName}`);
}

jessica.greet();

// 1. classes are not hoisted
// 2. classes are first class citizens
// 3. classes are executed in strict mode

/* =============== 215. Setters and Getter =============== */

const account = 
{
    owner: 'jonas',
    movements: [1, 2, 4, 6, 6,],

    get latest()
    {
        return this.movements.slice(-1).pop();
    },

    set latest(mov)
    {
        this.movements.push(mov);
    }
};


/* =============== 216. Static methods =============== */

// static methods aren't available for instances

const adri = new Person('Adri', 1984);
console.log(adri);

Person.hey = function()
{
    console.log('Hey there!');
    console.log(this);
}

Person.hey();

// this isn't working since the static hey is not inherited
// adri.hey();

/* =============== 217. Object.create =============== */

const PersonProto =
{
    calcAge()
    {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear)
    {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

/* =============== 218. Coding Challenge 2. =============== */


class CarCl
{
    constructor(make, speed)
    {
        this.make = make;
        this.speed = speed;
    }

    accelerate()
    {
        this.speed += 10;
        console.log(`'${this.make}' going at ${this.speed} km/h`);
    }

    brake()
    {
        this.speed -= 5;
        console.log(`'${this.make}' going at ${this.speed} km/h`);
    }

    get speedUs()
    {
        return this.speed / 1.6;
    }

    set speedUs(speed)
    {
        this.speed = speed * 1.6;
    }
}

const whip = new CarCl('Ford', 120);
console.log(whip);
console.log(whip.speedUs);
whip.accelerate();
whip.accelerate();
whip.brake();

whip.speedUs = 50;

console.log(whip);

/* =============== 219. Inheritance between Classes: constructor functions =============== */

const Human = function(firstname, birthYear)
{
    this.firstName = this.firstName;
    this.birthYear = birthYear;
};

Human.prototype.calcAge = function()
{
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course)
{
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Human.prototype);

Student.prototype.introduce = function()
{
    console.log(`My name is ${this.firstName} and I'm studying ${this.course}`);
}

const mike = new Student('mike', 2002, 'computer science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Human);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

/* =============== 220. Coding Challenge 3. =============== */

// const Car = function(make, speed)
// {
//     this.make   = make;
//     this.speed  = speed;
// };

// 1.

const EV = function(make, speed, charge)
{
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);


const tesla = new EV('Tesla', 120, 90);
console.log(tesla);
console.log(tesla.__proto__);
console.log(tesla.__proto__.__proto__);

// 2.

EV.prototype.chargeBattery = function(chargeTo)
{
    this.charge = chargeTo;
}


console.log(tesla);

// 3. 

EV.prototype.accelerate = function()
{
    this.speed += 20;
    this.charge *= 0.99
    console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`);
}

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);




