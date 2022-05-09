const navbar = document.querySelector('.navbar__links');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar');

// Observation Observer makes this simpler to achieve!
// function reveal() {
//   let reveals = document.querySelectorAll('.reveal');

//   for (let i = 0; i < reveals.length; i++) {
//     let windowHeight = window.innerHeight;
//     let elementTop = reveals[i].getBoundingClientRect().top;
//     let elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add('active');
//     } else {
//       reveals[i].classList.remove('active');
//     }
//   }
// }

// window.addEventListener('scroll', reveal);

// Toggle 'active' class on mobile nav when hamburger is clicked
hamburger.addEventListener('click', toggleNav);

// Disable 'active' class on mobile nav when anything besides hamburger is clicked
document.body.addEventListener('click', closeNav);

// Toggle mobile nav
function toggleNav() {
  navbar.classList.toggle('active');
}

// Close mobile nav when any element besides hamburger is clicked
function closeNav(event) {
  if (event.target !== hamburger) navbar.classList.remove('active');
}

// Elements required for Intersection Observer animations
const revealElements = document.querySelectorAll('.reveal');

// Creates IntersectionObserver and attaches it to appropriate elements
function createObserver() {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.33, 0.66, 1.0],
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  revealElements.forEach((revealElement) => observer.observe(revealElement));
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.3) {
        entry.target.classList.add('active');
      }
    }
  });
}

createObserver();

const navLogo = document.querySelector('.navbar__logo');

navLogo.addEventListener('mousedown', (event) => {
  navLogo.classList.add('squeeze');

  // Remove the squeeze animation after a while. Could just make this part of the animation keyframe itself.
  setTimeout(() => {
    navLogo.classList.remove('squeeze');
  }, 2000);
});

const firstNameElements = document.querySelectorAll('.first-name span');

firstNameElements.forEach((element) => {
  element.addEventListener('mouseover', (event) => {
    element.classList.add('active');
    element.classList.add('bounce-in');

    // Remove the bounce-in animation after a while. Could just make this part of the animation keyframe itself.
    setTimeout(() => {
      element.classList.remove('active');
      element.classList.remove('bounce-in');
    }, 2000);
  });
});
