const navbar = document.querySelector(".navbar__links");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar");


function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// Toggle 'active' class on mobile nav when hamburger is clicked
hamburger.addEventListener("click", toggleNav);

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