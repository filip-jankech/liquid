
// mobile menu toggle
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarItems = document.querySelector('.navbar__items');

navbarToggle.addEventListener('click', () => {
    if (navbarItems.classList.contains('navbar__items--display')) {
        navbarItems.classList.remove('navbar__items--display');
    } else {
        navbarItems.classList.add('navbar__items--display');
    }
});

// aution image gallery
function imageGallery() {
    const highlight = document.querySelector(".auction-main__gallery-highlight");
    const previews = document.querySelectorAll(".auction-main__gallery-preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const clickedSrc = this.src;
        previews.forEach(preview => preview.classList.remove("auction-main__gallery-image--active"));
        highlight.src = clickedSrc;
        preview.classList.add("auction-main__gallery-image--active");
      });
    });
  }
  
  imageGallery();