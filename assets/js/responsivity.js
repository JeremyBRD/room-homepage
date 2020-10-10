// RESPONSIVE NAV BUTTONS

const navCarousel = document.querySelector('.nav-carousel-btn');
const image = document.querySelectorAll('img.img-carousel');

const getHeight = () => image[0]['height'];

let newY = getHeight();

const styleNavTop = () => navCarousel.style.top = `${newY - 80}px`;

const initY = () => {
  if (newY > 900) return;
  styleNavTop();
};

const reportWindowsSize = () => {
  if (newY > 900) return;
  if (newY <= 900) {
    window.addEventListener('resize', () => {
      newY = getHeight();;
      styleNavTop();
    });
  };
};

export{ initY, reportWindowsSize };