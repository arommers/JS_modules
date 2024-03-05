'use strict';

/* =============== 247. asynchronous JS, AJAX and APIs =============== */

// AJAX Asynchronous Javascript and XML (data format deprecated. nowadays json is used)
// API Application Protocol Interface

/* =============== 249. Our First AJAX Call =============== */

// https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
}

const getCountryAndNeighborData = function(country)
{
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', 'https://restcountries.com/v2/name/' + country);
    request.send();

    request.addEventListener('load', function()
    {
        const [data] = JSON.parse(this.response);
        console.log(data);

        // render country 1
        renderCountry(data);

        // AJAX call country 2
        const neighbor = data.borders?.[0];
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
        request2.send();

        request2.addEventListener('load', function()
        {
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });
    })
}

getCountryAndNeighborData('holland');
getCountryAndNeighborData('USA');