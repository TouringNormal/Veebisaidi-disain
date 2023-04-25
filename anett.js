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

document.addEventListener("DOMContentLoaded", function() {
  // Set slider variables
  var sliderIndex = 1;
  var sliderImages = document.getElementsByClassName("mob-pic");

  // Set timer for slider
  setInterval(function() {
    // Hide current image
    sliderImages[sliderIndex - 1].style.display = "none";

    // Increment slider index
    sliderIndex++;

    // Reset slider index if it exceeds number of images
    if (sliderIndex > sliderImages.length) {
      sliderIndex = 1;
    }

    // Show next image
    sliderImages[sliderIndex - 1].style.display = "block";
  }, 3000);
});
