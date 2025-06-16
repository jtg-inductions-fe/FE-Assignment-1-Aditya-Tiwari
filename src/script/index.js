import '../styles/main.scss';

let hamburgerIcon = document.querySelector('.icon-hamburger');

let navlinksContainer = document.querySelector('.navlinks__container');
let navigationDrawerCloseIcon = document.querySelector(
    '.navlinks__container-close-icon',
);

hamburgerIcon.addEventListener('click', () => {
    navlinksContainer.style.display = 'flex';
    navlinksContainer.style.position = 'absolute';
    hamburgerIcon.style.display = 'none';
});

navigationDrawerCloseIcon.addEventListener('click', () => {
    hamburgerIcon.style.display = 'flex';
    navlinksContainer.style.position = 'static';
    navlinksContainer.style.display = 'none';
});
