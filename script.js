const adjectiveElement = document.querySelector('#subtitle_span-adjective');
const nounElement = document.querySelector('#subtitle_span-noun');

const ADJECTIVES = ['Aspiring', 'Passionate', 'Creative'];
const NOUNS = ['Web Developer', 'Game Developer', '3D Artist'];
let adjectiveIndex = 0;
let nounIndex = 0;

adjectiveElement.addEventListener('mouseover', setAdjective);

// setInterval(setAdjective, 2000);
setInterval(setNoun, 3000);

function setAdjective() {
  if (++adjectiveIndex >= ADJECTIVES.length) adjectiveIndex = 0;
  adjectiveElement.innerHTML = ADJECTIVES[adjectiveIndex];
}

function setNoun() {
  if (++nounIndex >= NOUNS.length) nounIndex = 0;
  nounElement.innerHTML = NOUNS[nounIndex];
}

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
