import "./style.css";

// Select slides
const slides = document.querySelectorAll('.carousel-item')

// current slide counter
let curSlide = 0;

// maximum number of slides
let maxSlide = slides.length - 1;

// select next slide button
const nextSlide = document.querySelector(".next");
// select prev slide button
const prevSlide = document.querySelector(".prev");

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
  curSlide === maxSlide
    ? curSlide = 0
    : curSlide++

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}px)`;
  });
});


// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  curSlide === 0
    ? curSlide = maxSlide
    : curSlide--

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}px)`;
  });
});
