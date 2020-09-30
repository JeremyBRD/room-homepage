// HUMBURGER

const humburger = document.getElementById('humburger');
const overlay = document.getElementById('overlay');
const cross = document.getElementById('close-overlay');

const overlayOn = () => overlay.style.display = 'block';
const overlayOff = () => overlay.style.display = 'none';

const displayMenu = () => humburger.addEventListener('click', () => {
  overlayOn();
});

const quitMenu = () => cross.addEventListener('click', () => {
  overlayOff();
});

export{ displayMenu, quitMenu };
