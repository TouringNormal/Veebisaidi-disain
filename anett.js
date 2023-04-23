/*const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});*/
const logoImage = document.getElementById('logo-image');
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
    logoImage.src = 'anett-logo-black.svg';
  } else {
    header.classList.remove('scrolled');
    logoImage.src = 'anett-logo-white.svg';
  }
});
