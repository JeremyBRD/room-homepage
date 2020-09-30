import { startSlide } from './carousel.js';
import { initY, reportWindowsSize } from './responsivity.js';
import { displayMenu, quitMenu } from './hamburger.js';

// INIT FUNCTIONS

document.addEventListener('turbolinks:load', () => {
  startSlide();
  initY();
  reportWindowsSize();
  displayMenu();
  quitMenu();
});
