//! header scroll
window.onscroll = function () {
  myFunction();
};

// Get the header
const header = document.querySelector('.header');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

//!

//? check hight card__info

function getHight() {
  const infoCards = document.querySelectorAll('.card__info');

  const sizeInfoCards = Array.prototype.map.call(infoCards, card => card.clientHeight);
  return sizeInfoCards;
}