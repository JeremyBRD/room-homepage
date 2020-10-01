import { startSlide } from './carousel.js';
import { initY, reportWindowsSize } from './responsivity.js';
import { displayMenu, quitMenu } from './hamburger.js';

// INIT FUNCTIONS

initY();
reportWindowsSize();
displayMenu();
quitMenu();
startSlide();
