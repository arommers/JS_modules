'use strict';

/* ======================= DECLARATIONS* ======================= */

const modal         = document.querySelector('.modal');
const overlay       = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo   = document.querySelector('.btn--scroll-to');
const section1      = document.querySelector('#section--1');

/* ======================= MODAL WINDOWS ======================= */

const openModal = function ()
{
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function ()
{
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e)
{
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* ======================= SCROLLING ======================= */

btnScrollTo.addEventListener('click', function()
{
  section1.scrollIntoView({behavior: 'smooth'});
});

/* ======================= PAGE NAVIGATION ======================= */

/* without even delegation */

// document.querySelectorAll('.nav__link').forEach(function(el)
// {
//   el.addEventListener('click', function(e)
//   {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// With event delegation

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e)
{
  e.preventDefault();
  if (e.target.classList.contains('nav__link'))
  {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});





/* =======================  LECTURES ======================= */

// 187. selecting, Creating and Deleting elements

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// // console.log(allSections);

// document.getElementById('section--1');
// const allBtns = document.getElementsByTagName('button');
// // console.log(allBtns);

// document.getElementsByClassName('btn');

// // creating and inserting elements

//.insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookies for improved functionality. <button class ="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);


// Delete elements

// document.querySelector('.btn--close-cookie').addEventListener('click', function()
// {
//   message.remove();
// })

// 188. Styles, Attributes and Classes

// Styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'minimalist logo';
// console.log(logo.alt);

// 189. Smooth scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function()
// {
//   const s1coords = section1.getBoundingClientRect();
//   scrolling
//   window.scrollTo(s1coords.left + pageXOffset, s1coords.top + window.pageYOffset);
//   window.scrollTo(
//   {
//      left: s1coords.left + window.pageXOffset,
//      top: s1coords.top + window.pageYOffset,
//      behavior: 'smooth',
//   });

//   section1.scrollIntoView({behavior: 'smooth'});
// });

// 190. Types of events 

// const h1 = document.querySelector('h1');
// const alertH1 = function(e)
// {
//   alert('addEventListener: Great! You are now reading the heading!');
// }

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function(e)
// {
//   alert('onmouseenter: Great! You are now reading the heading!');
// };

// 191. 192. 193. Event propagation adn delegation

// rgb (255,255,255)

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e)
// {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e)
// {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e)
// {
//   this.style.backgroundColor = randomColor();
// });

// 194. Dom traversing
const h1 = document.querySelector('h1');

// going downwards: child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.innerHTML);
h1.firstElementChild.style.color = 'blue';
h1.lastElementChild.style.color = 'red';

// going upwards: parents

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el)
{
  if (el !== h1)
    el.style.transform = 'scale(0.5)';
});

// 195. Building a Tabbed Component

const tabs          = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent   = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e)
{
  const current = e.target.closest('.operations__tab');
  if (!current) return

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  current.classList.add('operations__tab--active');

  document.querySelector(`.operations__content--${current.dataset.tab}`).classList.add('operations__content--active');
});


