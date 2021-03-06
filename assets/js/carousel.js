// CAROUSEL

const slideContainer = document.querySelector('.carousel-container');
const slide = document.querySelector('.carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const interval = 3000;

let slides = document.querySelectorAll('.carousel-element');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = 100; // slides[index].clientWidth;

slide.style.marginLeft = `${-slideWidth * index}vw`;

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.carousel-element');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.marginLeft = `${-slideWidth * index}vw`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.marginLeft = `${-slideWidth * index}vw`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if(index >= slides.length -1) return;
  index++;
  slide.style.marginLeft = `${-slideWidth * index}vw`;
  slide.style.transition = '.7s';
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.marginLeft = `${-slideWidth * index}vw`;
  slide.style.transition = '.7s';
};

slideContainer.addEventListener('mouseenter', () => {
  if (window.innerWidth <= 900 ) return;
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide, clearInterval(slideId));
prevBtn.addEventListener('click', moveToPreviousSlide, clearInterval(slideId));

export{ startSlide };
