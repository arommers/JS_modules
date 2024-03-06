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

const whereAmI = function(lat, lng)
{
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response =>
    {
        if(!response.ok)
            throw new Error(`Too many requests ${response.status}`); 
        return response.json();
    })
    .then(data => 
    {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => 
    {
        if(!response.ok)
            throw new Error(`something went wrong getting the country`);
        return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error =>console.log(error.message));
}

whereAmI(36.2048, 138.2529);
// whereAmI(52.3676, 4.9041);
// whereAmI(52.508, 13.381);

