import { startSlide } from './carousel.js';
import { initY, reportWindowsSize } from './responsivity.js';
import { displayMenu, clickOnLinks } from './hamburger.js';

// INIT FUNCTIONS

initY();
reportWindowsSize();
displayMenu();
clickOnLinks();
startSlide();
