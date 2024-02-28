'use strict';

/* ======================= SELECTIONS ======================= */

const modal         = document.querySelector('.modal');
const overlay       = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo   = document.querySelector('.btn--scroll-to');
const section1      = document.querySelector('#section--1');
const nav           = document.querySelector('.nav');
const tabs          = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent   = document.querySelectorAll('.operations__content');
const header        = document.querySelector('.header');



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

// With event delegation

document.querySelector('.nav__links').addEventListener('click', function(e)
{
  e.preventDefault();
  if (e.target.classList.contains('nav__link'))
  {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

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


// 1. Add event listener to common parent element
// 2. Determine what element originated the event


/* ======================= Tabbed component ======================= */

tabsContainer.addEventListener('click', function(e)
{
  const current = e.target.closest('.operations__tab');
  if (!current) return

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));
  
  current.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${current.dataset.tab}`).classList.add('operations__content--active');
});

/* ======================= Menu fade animations ======================= */

const handleHover = function(e)
{
  if (e.target.classList.contains('nav__link'))
  {
    const current = e.target;
    const siblings = current.closest('.nav').querySelectorAll('.nav__link');
    const logo = current.closest('.nav').querySelector('img');
    siblings.forEach(el =>
      {
        if (el !== current) el.style.opacity = this;
          
      });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/* ======================= Sticky navigation ======================= */

const navHeight   = nav.getBoundingClientRect().height;
const stickyNav = function(entries)
{
  const entry = entries[0];
  if (!entry.isIntersecting)
    nav.classList.add('sticky');
  else
    nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav,
  {
    root: null,
    rootmargin: `-${navHeight}px`,
    threshold: 0
  });

headerObserver.observe(header);

// const stickyLine = section1.getBoundingClientRect()

// window.addEventListener('scroll', function()
// {
//   if (this.window.scrollY > stickyLine.top)
//     nav.classList.add('sticky')
//   else
//     nav.classList.remove('sticky');
// });

// const obsCallback = function(entries, observer)
// {
//   entries.forEach(entry =>
//     {
//       console.log(entry);
//     })
// };
// const obsOptions = 
// {
//   root:       null,
//   threshold:  [0, 0.2]
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);


/* ======================= Revealing elements on scroll ======================= */

const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer)
{
  const [entry] = entries;
  if(entry.isIntersecting)
  {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
  else
    return ;
}

const sectionObserver = new IntersectionObserver(revealSection, 
  {
    root: null,
    threshold: 0.15
  });

allSections.forEach(function(section)
{
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/* =======================  Lazy loading images ======================= */

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer)
{
  const [entry] = entries;
  if(entry.isIntersecting)
  {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function()
    {
      entry.target.classList.remove('lazy-img');
    });
  }
  else
    return ;
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, 
  {
    root: null,
    rootmargin: 100,
    threshold: 0
  });

imgTargets.forEach(img => imgObserver.observe(img));

/* =======================  Slider Component ======================= */

const slider = function ()
{
  const slides        = document.querySelectorAll('.slide');
  const btnLeft       = document.querySelector('.slider__btn--left');
  const btnRight      = document.querySelector('.slider__btn--right');
  const dotContainer  = document.querySelector('.dots');
  let   curSlide      = 0;
  const maxSlides     = slides.length;

  // Functions

  const createDots = function ()
  {
    slides.forEach(function(_, i)
    {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    })
  };

  const goToSlide = function(slide)
  {
    slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide) * 100}%)`);
  }


  const activateDot = function(slide)
  {
    document.querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }

  const nextSlide = function()
  {
    if (curSlide === maxSlides - 1)
      curSlide = 0;
    else
      curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function()
  {
    if (curSlide === 0)
      curSlide = maxSlides - 1;
    else
      curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function()
  {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();
  
  // Event handlers

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function(e)
  {
    if (e.key === 'ArrowRight')
      nextSlide();
    else if (e.key === 'ArrowLeft')
      prevSlide();
  });

  dotContainer.addEventListener('click', function(e)
  {
    if (e.target.classList.contains('dots__dot'))
    {
      const {slide} = e.target.dataset;
      goToSlide(slide);
      activateDot(curSlide);
    }
  });
};

slider();


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
// const h1 = document.querySelector('h1');

// // going downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.innerHTML);
// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'red';

// // going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el)
// {
//   if (el !== h1)
//     el.style.transform = 'scale(0.5)';
// });

// 195. Building a Tabbed Component

// const tabs          = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector(".operations__tab-container");
// const tabsContent   = document.querySelectorAll('.operations__content');

// tabsContainer.addEventListener('click', function(e)
// {
//   const current = e.target.closest('.operations__tab');
//   if (!current) return

//   tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
//   tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));
  
//   current.classList.add('operations__tab--active');
//   document.querySelector(`.operations__content--${current.dataset.tab}`).classList.add('operations__content--active');
// });

// 196/ Passing arguments to event handlers

