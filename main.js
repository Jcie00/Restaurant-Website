var navCloseEl = document.querySelector('.nav__close');
var navList = document.querySelector('.nav__list');
var navIconEl = document.querySelector('.nav__icon');
var navBgOverlayEl = document.querySelector('.nav__bgOverlay');
window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
});
const navOpen = () => {
   navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}
const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}
navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)



// aos
AOS.init({
  offset: 200,
  delay: 100,
  durattion: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});