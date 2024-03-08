'use strict';

/* =============== 247. asynchronous JS, AJAX and APIs =============== */

// AJAX Asynchronous Javascript and XML (data format deprecated. nowadays json is used)
// API Application Protocol Interface

/* =============== 249. Our First AJAX Call =============== */

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (message)
{
    countriesContainer.insertAdjacentText('beforeend', message);
    countriesContainer.style.opacity = 1;
};

const renderCountry = function(data, className = '')
{
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getJSON = function(url, error = 'Something went wrong')
{
    return fetch(url).then(response =>
    {
        if (!response.ok)
            throw new Error(`${error} ${response.status}`);
        return response.json();
    });
}

//Old school way of doing
// const getCountryData = function(country)
// {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://restcountries.com/v2/name/' + country);
//     request.send();

//     request.addEventListener('load', function()
//     {
//         const [data] = JSON.parse(this.response);
//         console.log(data);

//         const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//         </article>
//         `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     })
// }

// getCountryData('holland');


/* =============== 251. Our First AJAX Call =============== */

// const getCountryAndNeighborData = function(country)
// {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://restcountries.com/v2/name/' + country);
//     request.send();

//     request.addEventListener('load', function()
//     {
//         const [data] = JSON.parse(this.response);
//         console.log(data);

//         // render country 1
//         renderCountry(data);

//         // AJAX call country 2
//         const neighbor = data.borders?.[0];
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//         request2.send();

//         request2.addEventListener('load', function()
//         {
//             const data2 = JSON.parse(this.responseText);
//             renderCountry(data2, 'neighbour');
//         });
//     })
// }

// getCountryAndNeighborData('holland');
// getCountryAndNeighborData('USA');

/* =============== 252. - 256. Promises and the Fetch API =============== */

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v2/name/' + country);
// request.send();

// const request = fetch('https://restcountries.com/v2/name/holland');
// console.log(request);

/* =============== 253. Consuming a promise =============== */

// const getCountryData = function(country)
// {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response)
//     {
//         console.log(response);
//         return response.json();
//     }).then(function(data)
//     {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

// const getCountryData = function(country)
// {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response =>
//     {
//         if (!response.ok)
//             throw new Error(`Country not found ${response.status}`);_
//         return response.json()
//     })
//     .then(data => 
//     {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders?.[0];
//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => 
//     {
//         console.error(error);
//         renderError(`Something went wrong. ${error.message}. Try again!`);
//     })
//     .finally(() => 
//     {
//         countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function(country)
// {
//     getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => 
//     {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders?.[0];
//         if (!neighbour)
//             throw new Error(' No neigbours found');
//         return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => 
//     {
//         renderError(`Something went wrong. ${error.message}. Try again!`);
//     })
//     .finally(() => 
//     {
//         countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function()
// {
//     getCountryData('holland');
// });

// getCountryData('japan');

/* =============== 257. Coding Challenge =============== */

// const getJSON = function(url, error = 'Something went wrong')
// {
//     return fetch(url).then(response =>
//     {
//         if (!response.ok)
//             throw new Error(`${error} ${response.status}`);
//         return response.json();
//     });
// }

// const whereAmI = function(lat, lng)
// {
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response =>
//     {
//         if(!response.ok)
//             throw new Error(`Too many requests ${response.status}`); 
//         return response.json();
//     })
//     .then(data => 
//     {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);

//         return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => 
//     {
//         if(!response.ok)
//             throw new Error(`something went wrong getting the country`);
//         return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error =>console.log(error.message));
// }

// whereAmI(36.2048, 138.2529);
// // whereAmI(52.3676, 4.9041);
// // whereAmI(52.508, 13.381);

/* =============== 259. the event loop in practice =============== */

// console.log('test start');

// setTimeout(() => console.log("called after 0 seconds", 0));

// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('resolved promise 2').then(res => 
//     {
//         for (let i = 0; i < 1000000; i++) {};
//         console.log(res);
//     });

// console.log('test end');

/* =============== 260.  Building a promise =============== */

// const lotteryPromise = new Promise(function(resolve, reject)
// {
//     console.log('Lottery Draw is Happening');
//     setTimeout(function()
//     {
//         if(Math.random() >= 0.5)
//             resolve('You Win!');
//         else
//             reject(new Error('You lost your money'));
//     }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(error => console.log(error));


// Promisifying setTimeout
// const wait = function(seconds)
// {
//     return new Promise(function(resolve)
//     {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// wait(1).then(() => 
// {
//     console.log('I waited for 1 seconds');
//     return wait(2);
// }).then(() => 
// {
//     console.log('I waited for 2 seconds');
//     return wait(3);
// }).then(() => 
// {
//     console.log('I waited for 3 seconds');
//     return wait(4);
// }).then(() => 
// {
//     console.log('I waited for 4 seconds');
//     return wait(5);
// }).then(() => console.log('I waited for 5 second'));

// Promise.resolve('abc').then((res) => console.log(res));
// Promise.reject(new Error('someting went wrong')).catch((error) => console.error(error));

// navigator.geolocation.getCurrentPosition(position =>
// {
//     console.log(position);
// },
// error =>
// {
//     console.error(error);
// });

// const getPosition = function()
// {
//     return new Promise(function(resolve, reject)
//     {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//         // navigator.geolocation.getCurrentPosition(position => resolve(position),
//         // error => reject(error));
//     });
// }

// getPosition().then (pos => console.log(pos));

// const whereAmI = function()
// {
//     getPosition().then(pos => 
//     {
//         const {latitude: lat, longitude: lng} = pos.coords;
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//     .then(response =>
//     {
//         if(!response.ok)
//             throw new Error(`Too many requests ${response.status}`); 
//         return response.json();
//     })
//     .then(data => 
//     {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);

//         return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => 
//     {
//         if(!response.ok)
//             throw new Error(`something went wrong getting the country`);
//         return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error =>console.log(error.message));
// }

// btn.addEventListener('click', whereAmI);

/* =============== 262.  Coding Challenge 2. =============== */

// const wait = function(seconds)
// {
//     return new Promise(function(resolve)
//     {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function(imgPath)
// {
//     return new Promise(function(resolve, reject)
//     {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', function()
//         {
//             imgContainer.append(img);
//             resolve(img);
//         });
//         img.addEventListener('error', function()
//         {
//             reject(new Error('Image not found'));
//         });
//     });
// }

// let currentImg;

// createImage('img/img-1.jpg')
// .then(img => 
// {
//     console.log('Image 1 loaded');
//     currentImg = img;
//     return wait(2);
// })
// .then(() => 
// {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
// })
// .then(img => 
// {
//     console.log('Image 2 loaded');
//     currentImg = img;
//     return wait(2);
// })
// .then(() => 
// {
//     currentImg.style.display = 'none';
//     return createImage('img/img-1.jpg');
// })
// .then(() => {})
// .catch(error => console.log(error));

/* =============== 263.  Consuming promises with Asyn/Await =============== */

const getPosition = function ()
{
    return new Promise (function (resolve, reject)
    {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function()
{
    try
    {
        // gelocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;

        // reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!resGeo.ok)
            throw new Error('Too many requests, slow down!');
        const dataGeo = await resGeo.json();
        
        // country data
        const response = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
        if(!response.ok)
            throw new Error('Problem getting country');
        const data = await response.json();
        renderCountry(data[0]);
    
        return(`You are in ${dataGeo.city}, ${dataGeo.country}`);
    }
    catch(err)
    {
        console.log(err )
        renderError(`${err.message}`);

        // reject promise returned from async function
        throw err;
    };

    /* This method equals our previous
    fetch(`https://restcountries.com/v2/name/${country}`).
    then(response => console.log(response)); */
};
/* =============== 265.  Returning values with Asyn/Await =============== */

// whereAmI()
// .then(city =>console.log (city))
// .catch(error => console.error(error.message))
// .finally(() =>  console.log(`Finished obtaining the location`));
// console.log('First');

// (async function()
// {
//     try
//     {
//         const result = await whereAmI();
//         console.log(result);
//     }
//     catch(error)
//     {
//         console.error(error.message);
//     }
//     console.log(`Finished getting the location`);
// })();

/* =============== 266.  Running promises in parallel =============== */

// const getJSON = function(url, error = 'Something went wrong')
// {
//     return fetch(url).then(response =>
//     {
//         if (!response.ok)
//             throw new Error(`${error} ${response.status}`);
//         return response.json();
//     });
// }

// const getThreeCountries = async function(c1, c2, c3)
// {
//     try
//     {
//         // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v2/name/${c1}`),
//             getJSON(`https://restcountries.com/v2/name/${c2}`),
//             getJSON(`https://restcountries.com/v2/name/${c3}`)
//         ]);

//         console.log(data.map(d => d[0].capital));
//         // console.log([data1.capital, data2.capital, data3.capital])
//     }
//     catch(error)
//     {
//         console.error(error)
//     }
// }

// getThreeCountries('holland', 'japan', 'USA');

/* =============== 267. Promise Combinators =============== */

// Promise.race

// (async function()
// {
//     const response = await Promise.race([
//         getJSON(`https://restcountries.com/v2/name/france`), 
//         getJSON(`https://restcountries.com/v2/name/italy`),
//         getJSON(`https://restcountries.com/v2/name/japan`),
//     ]);
//     console.log(response[0]);
// })();

/* =============== 268.  Coding Challenge 3. =============== */

const wait = function(seconds)
{
    return new Promise(function(resolve)
    {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath)
{
    return new Promise(function(resolve, reject)
    {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function()
        {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function()
        {
            reject(new Error('Image not found'));
        });
    });
}

// createImage('img/img-1.jpg')
// .then(img => 
// {
//     console.log('Image 1 loaded');
//     currentImg = img;
//     return wait(2);
// })
// .then(() => 
// {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
// })
// .then(img => 
// {
//     console.log('Image 2 loaded');
//     currentImg = img;
//     return wait(2);
// })
// .then(() => 
// {
//     currentImg.style.display = 'none';
//     return createImage('img/img-1.jpg');
// })
// .then(() => {})
// .catch(error => console.log(error));

// let currentImg;

// const loadNPause = async function()
// {
//     try
//     {
//         let img = await createImage('img/img-1.jpg');
//         console.log('Image 1 loaded');
//         await wait(2);
//         img.style.display = 'none';

//         img = await createImage('img/img-2.jpg');
//         console.log('Image 2 loaded');
//         await wait(2);
//         img.style.display = 'none';
//     }
//     catch(error)
//     {
//         console.log(error.message);
//     }
// }

// loadNPause();

const loadAll = async function(imgArr)
{
    try
    {        
        const imgs = imgArr.map(async img => await createImage(img));
        const imgEl = await Promise.all(imgs);
        imgEl.forEach(img => img.classList.add('parallel'));
        
    }
    catch(error)
    {
        console.log(error.message);
    }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);