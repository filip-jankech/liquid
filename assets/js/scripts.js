
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
  const highlight = document.querySelector('.auction-main__gallery-highlight');
  const previews = document.querySelectorAll('.auction-main__gallery-preview img');
  const leftArrow = document.querySelector('.auction-main__gallery-left-arrow');
  const rightArrow = document.querySelector('.auction-main__gallery-right-arrow');
  let currentlyHighlighted = 0;

  for (let i=0; i<previews.length; i++) {
    previews[i].addEventListener('click', () => {
      const clickedSrc = previews[i].src;
      previews.forEach(preview => preview.classList.remove('auction-main__gallery-image--active'));
      highlight.src = `${clickedSrc.split('_')[0]}.jpg`;
      previews[i].classList.add('auction-main__gallery-image--active');
      currentlyHighlighted = i;
    });
  }

  leftArrow.addEventListener('click', () => {
    if (currentlyHighlighted > 0) {
      const newSrc = previews[currentlyHighlighted - 1].src;
      previews.forEach(preview => preview.classList.remove('auction-main__gallery-image--active'));
      highlight.src = `${newSrc.split('_')[0]}.jpg`;
      previews[currentlyHighlighted - 1].classList.add('auction-main__gallery-image--active');
      currentlyHighlighted--;
    } else {
      const newSrc = previews[previews.length - 1].src;
      previews.forEach(preview => preview.classList.remove('auction-main__gallery-image--active'));
      highlight.src = `${newSrc.split('_')[0]}.jpg`;
      previews[previews.length - 1].classList.add('auction-main__gallery-image--active');
      currentlyHighlighted = previews.length - 1;
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentlyHighlighted < previews.length - 1) {
      const newSrc = previews[currentlyHighlighted + 1].src;
      previews.forEach(preview => preview.classList.remove('auction-main__gallery-image--active'));
      highlight.src = `${newSrc.split('_')[0]}.jpg`;
      previews[currentlyHighlighted + 1].classList.add('auction-main__gallery-image--active');
      currentlyHighlighted++;
    } else {
      const newSrc = previews[0].src;
      previews.forEach(preview => preview.classList.remove('auction-main__gallery-image--active'));
      highlight.src = `${newSrc.split('_')[0]}.jpg`;
      previews[0].classList.add('auction-main__gallery-image--active');
      currentlyHighlighted = 0;
    }
  });
}

imageGallery();