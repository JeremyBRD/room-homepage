// HUMBURGER

const navMobile = document.getElementById('nav-mobile');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.navlinks-mobile > a');

console.log(navLinks);

const overlayOn = () => overlay.style.display = 'flex';
const navOff = () => navMobile.style.display = 'none';
const overlayOff = () => overlay.style.display = 'none';
const navOn = () => navMobile.style.display = 'flex';
const disableScroll = () => document.body.classList.add('stop-scrolling');
const enableScroll = () => document.body.classList.remove('stop-scrolling');

const clickOnLinks = () => navLinks.forEach (link => {
  link.addEventListener('click', () => {
    overlayOff();
    navOn();
    enableScroll();
  })
});

const displayMenu = () => hamburger.addEventListener('click', () => {
  overlayOn();
  navOff();
  disableScroll();
});

export{ displayMenu, clickOnLinks };
