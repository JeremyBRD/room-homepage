// HUMBURGER

const navMobile = document.getElementById('nav-mobile');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('close-overlay');

const overlayOn = () => overlay.style.display = 'flex';
const navOff = () => navMobile.style.display = 'none';
const overlayOff = () => overlay.style.display = 'none';
const navOn = () => navMobile.style.display = 'flex';


const displayMenu = () => hamburger.addEventListener('click', () => {
  overlayOn();
  navOff();
});

const quitMenu = () => cross.addEventListener('click', () => {
  overlayOff();
  navOn();
});

export{ displayMenu, quitMenu };
